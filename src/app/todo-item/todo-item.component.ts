import {Component, Input, OnInit} from '@angular/core';
import {TodoItem} from '../interfaces/todo-item';

// @Component annotation to a class/object
@Component({
  selector: 'app-todo-item',
  template: `
      <div class="todo-item">
          {{ item.title }}
      </div>
  `,
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  // @Input is parameter to the component/class
  // @Autowired TodoItem item; -- Java
  @Input() item: TodoItem;

  constructor() {
  }

  ngOnInit() {
  }

}
