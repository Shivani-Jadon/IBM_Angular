import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModel } from 'src/login.model';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app';
  user : LoginModel;

  constructor(private service : UserService, private router : Router) {
    this.user = new LoginModel();
  }
  
  loggedOut() {
    this.service.logout();   
    localStorage.removeItem("user");
    this.router.navigate(['login']);
  }
}
