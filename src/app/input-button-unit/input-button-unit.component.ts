import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  // avoid name duplicate with HTML elements, like input
  selector: 'app-input-button-unit',
  // templateUrl: './input-button-unit.component.html',
  template: `
      <input class="todo-input"
             #inputElementRef
             [value]="title"
             (keyup.enter)="submitValue($event.target.value)">
      <button class="btn"
              (click)="submitValue(inputElementRef.value)">
          Save
      </button>
  `,
  styleUrls: ['./input-button-unit.component.css']
})

// OnInit is an interface for Angular Components
// components are objects
export class InputButtonUnitComponent implements OnInit {

  @Output() submit: EventEmitter<string> = new EventEmitter<string>();


  title: string = 'I will save you!';

  // called when instance is created
  constructor() {
    // console.log(this.title);
    // this.title = 'I love Angular!';
    // console.log(this.title);
  }

  // this method is a component life-cycle method
  // caled after instance creation
  // think of this as @PostConstruct
  ngOnInit() {
    // setTimeout(() => {
    //   this.title = 'This is not the title you are looking for';
    //   }, 3000);
  }

  submitValue(newTitle: string) {
    console.log(newTitle);
    this.submit.emit(newTitle);
  }

}
