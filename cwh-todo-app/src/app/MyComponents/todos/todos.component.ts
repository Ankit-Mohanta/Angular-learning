import { Component } from '@angular/core';
import { TodoItemsComponent } from "../todo-items/todo-items.component";

@Component({
  selector: 'app-todos',
  imports: [TodoItemsComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent {

}
