import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:Todo[];
  localItem:string;
  constructor() {
    this.todos=[];
    this.localItem = localStorage.getItem("todos");
    if(this.localItem==null){
      this.todos=[];
    }
    else{
      this.todos = JSON.parse(this.localItem);
    }
   }

  ngOnInit(): void {
  }

  deleteTodo(todo:Todo){
    console.log("Todo found at todos.component.ts for deletion"+todo.title);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index,1);
    localStorage.setItem("todos" , JSON.stringify(this.todos));
  }

  addTodo(todo:Todo){
    console.log("Todo found at todos.component.ts for addition"+todo.title);
    this.todos.push(todo);
    localStorage.setItem("todos" , JSON.stringify(this.todos));
  }

  toggleTodo(todo:Todo){
    console.log("Todo found at todos.component.ts for toggle"+todo.title);
    const index = this.todos.indexOf(todo);
    this.todos[index].active=!this.todos[index].active;
    localStorage.setItem("todos" , JSON.stringify(this.todos));
  }
}
