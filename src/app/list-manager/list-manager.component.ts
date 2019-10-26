import {Component, OnInit} from '@angular/core';
import {TodoItem} from '../interfaces/todo-item';
import {TodoListService} from '../services/todo-list.service';

@Component({
  selector: 'app-list-manager',
  template: `
      <div class="todo-app">
          <!--    instantiation of a component-->
          <app-input-button-unit (submit)="addItem($event)"></app-input-button-unit>

          <ul>
              <li *ngFor="let todoItem of todoList">
                  <app-todo-item [item]="todoItem"></app-todo-item>
              </li>
          </ul>
      </div>
  `,
  styleUrls: ['./list-manager.component.css']
})
export class ListManagerComponent implements OnInit {
  todoList: TodoItem[];

  // inject the todoListService into our constructor
  // use private access modifier to eliminate autowiring and not use "this" keyword
  // is this privateizing &..autowiring?
  constructor(private todoListService: TodoListService) {

  }

  ngOnInit() {
    this.todoList = this.todoListService.getTodoList();
  }

  addItem(title: string) {
    this.todoListService.addItem({title});
  }

}
