import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InputButtonUnitComponent } from './input-button-unit/input-button-unit.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { ListManagerComponent } from './list-manager/list-manager.component';
import {TodoListService} from './services/todo-list.service';

// only one @NgModule per app
@NgModule({
  declarations: [
    AppComponent,
    InputButtonUnitComponent,
    TodoItemComponent,
    ListManagerComponent
  ],
  imports: [
    BrowserModule
  ],
  // providers  = how to provide a service we're looking for
  // Angular will create a Singleton (one instance shared across the entire app)
  providers: [TodoListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
