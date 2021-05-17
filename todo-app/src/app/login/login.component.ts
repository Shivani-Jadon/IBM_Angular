import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModel } from 'src/login.model';
import { UserModel } from 'src/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  auth : LoginModel;

  constructor(private service : UserService, private router : Router) { 
    this.auth = new LoginModel();
  }

  // ngOnInit() is a lifecycle method which is called after constructor
  ngOnInit(): void {
  }

  loggedIn() {
    let user : UserModel;
    this.service.validateLogin(this.auth).then((result : UserModel) => { 
      user = result;
      console.log(user);
      
      if(user != null) {
        localStorage.setItem("user", JSON.stringify(user));
        this.router.navigate(['todo']);
      }else {
        alert("Login failed!! Invalid email/password");
      }
    });
   
  }

}
