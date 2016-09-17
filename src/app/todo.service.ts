import { Injectable } from '@angular/core';

import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class TodoService {

  constructor(private http: Http) { }

  getTodos() {
    return this.http.get('api/todos')
                    .map(res => res.json());
  }

  getRequestOptions(): RequestOptions {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    return new RequestOptions({ headers: headers });
  }

  postTodo(todo) {
    return this.http.post('api/todo', JSON.stringify(todo), this.getRequestOptions())
                    .toPromise()
                    .then(res => res.json())
  }

  putTodo(todo) {
    return this.http.put('api/todo/' + todo.id, JSON.stringify(todo), this.getRequestOptions())
                    .toPromise()
                    .then(res => res.json())
  }
  

  deleteTodo(todoId) {
    return this.http.delete('api/todo/' + todoId, this.getRequestOptions())
                    .toPromise()
                    .then(res => res.json())
  }

}
