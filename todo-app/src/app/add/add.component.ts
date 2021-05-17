import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from '../services/todo.service';
import { TodoModel } from '../../todo.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  todo : TodoModel;
  categories : string[];
  priorities : string[];
  stats : string[];

  constructor(private service : TodoService, private router : Router) {
    this.todo = new TodoModel();
    this.categories = ["Personal","Official","Family","Gang"];
    this.priorities = ["Low","High","Normal","Urgent"];
    this.stats = ["Due","Done","Ignore","Missed"];
  }

  ngOnInit(): void {
    if(localStorage.getItem("user") == null)
      this.router.navigate(['login']);
  }

  saveTodo() {
    this.service.createTodo(this.todo);
    this.router.navigate(['list']);
  }
}
