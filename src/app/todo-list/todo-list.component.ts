import { Component, OnInit } from '@angular/core';
import {TodoService} from '../todo.service';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  providers: [TodoService]
})
export class TodoListComponent implements OnInit {
  todos = []

  constructor(private todoService: TodoService) { }

  getTodos() {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  ngOnInit() {
    this.getTodos();
  }

  addNewTodo(todoMsg) {
    let todo = {message: todoMsg};
    this.todoService.postTodo(todo).then(res => {this.getTodos()});
  }

  onTodoDelete($event) {
    let id = $event.id;

    this.todoService.deleteTodo(id)
        .then(res => {
          this.getTodos();
        });
  }

  onTodoChange(todo) {
    console.log(todo);
    this.todoService.putTodo(todo);
  }

}
