import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-item',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  
  @Input()
  todo=null

  @Output() onDeleted = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onDeleteTodo(todo) {
    this.onDeleted.emit(todo);
  }

}
