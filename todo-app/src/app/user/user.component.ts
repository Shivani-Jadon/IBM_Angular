import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from 'src/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user : UserModel;

  constructor(private service : UserService, private route : Router) { 
    this.user = new UserModel();
  }

  ngOnInit(): void {
  }

  saveUser() {
    this.service.addUser(this.user);
    this.route.navigate(['login']);
  }

}
