import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodosComponent } from "./MyComponents/todos/todos.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TodosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  count = 0;
  title = 'cwh-todo-app' + 0;
  // chnage the title
  constructor(){
    setTimeout(()=>{
      this.title = 'Updated App Title' + this.count
    }, 2000)

    setInterval(()=>{
      this.count++;
      this.title = 'cwh-todo-app' + this.count
    }, 2000)
  }
}
