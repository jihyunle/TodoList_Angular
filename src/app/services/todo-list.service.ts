import {Injectable} from '@angular/core';
import {TodoItem} from '../interfaces/todo-item';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  // array of obj
  // TodoItem[] todoList = new TodoItem[]; -- in Java
  private todoList: TodoItem[] = [
    {title: 'install NodeJS'},
    {title: 'install Angular CLI'},
    {title: 'create new app'},
    {title: 'serve app'},
    {title: 'develop app'},
    {title: 'deploy app'},
  ];

  constructor() {
  }

  getTodoList() {
    return this.todoList;
  }

  addItem(item: TodoItem) {
    this.todoList.push(item);
  }

}
