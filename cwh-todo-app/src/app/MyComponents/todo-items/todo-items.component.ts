import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todo-items',
  imports: [],
  templateUrl: './todo-items.component.html',
  styleUrl: './todo-items.component.scss',
})
export class TodoItemsComponent {
  @Input() todo: Todo | undefined
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter()

  ankit(){
    this.deleteTodo.emit(this.todo);
    console.log('ankit');
  }

  
}
