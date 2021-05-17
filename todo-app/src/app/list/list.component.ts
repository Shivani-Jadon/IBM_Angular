import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TodoModel } from 'src/todo.model';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  todos : TodoModel[] = [];
  constructor(private service : TodoService, private router : Router) { }

  ngOnInit(): void {
    if(localStorage.getItem("user") == null)
      this.router.navigate(['login']);
    else{
      this.service.todoByUser().then((result : TodoModel[]) => {
        this.todos = result;
        console.log(this.todos);
      });
      
     } 
  }

  delete(id : number) {
    this.service.todoDelete(id);
    this.router.navigate(['list']);
  }

}
