import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginModel } from 'src/login.model';
import { UserModel } from 'src/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // private baseUri : string = "http://localhost:8850"; for localhost
  private baseUri : string = "http://13.234.113.8";
  user : UserModel;

  constructor(private http : HttpClient) { 
  }

  async validateLogin(auth : LoginModel) {
    return await this.http.get<UserModel>(this.baseUri + "/login?email="+
     auth.email + "&password=" + auth.password).toPromise();

  }

  logout() {
    console.log("Logging you out");
    this.http.get(this.baseUri + "/logout").subscribe(() => console.log("User logged out"));
  }

  addUser(user : UserModel) {
    this.http.post(this.baseUri + "/user" , user).subscribe(data => data = user);
  }
}
