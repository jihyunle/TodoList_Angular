// imports code that defines the decorator, Component
import { Component } from '@angular/core';
import {TodoItem} from './interfaces/todo-item';
// metadata
@Component({
  selector: 'app-groot',
  // templateUrl: './app.component.html',
  // use template rather than templateUrl for inline template,
  // this gets injected into index.html
  template:
      `
      <h1 class="app-title">
          Welcome to {{ title }}!
      </h1>
      <app-list-manager></app-list-manager>
  `,
  styleUrls: ['./app.component.css']
})

// variables below
export class AppComponent {
  title = 'My To Do List App';
}


