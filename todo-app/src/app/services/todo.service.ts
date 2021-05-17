import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TodoModel } from 'src/todo.model';
import { UserModel } from 'src/user.model';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  // private baseUri : string = "http://localhost:8850/todo"; for localhost
  private baseUri : string = "http://13.234.113.8/todo";
 
  constructor(private http : HttpClient) { }

  createTodo(todo : TodoModel) {
    let user : UserModel;
    user = JSON.parse(localStorage.getItem("user"));
    this.http.post(this.baseUri+"/"+ user.userid, todo).subscribe(data => data = todo);
  }

  todoById(id : number) {
    return this.http.get<TodoModel>(this.baseUri+"/" + id);
  }

  async todoByUser(){
    let user : UserModel;
    user = JSON.parse(localStorage.getItem("user"));

    // return this.http.get<TodoModel[]>(this.baseUri+"/user/" + user.userid).toPromise();
    return this.http.get<TodoModel[]>(this.baseUri+"/user/" + user.userid).pipe(delay(1000)).toPromise();
  }

  todoDelete(todoid : number) {
    this.http.delete(this.baseUri + '/remove/' + todoid).pipe(delay(1000)).subscribe();
  }
}
