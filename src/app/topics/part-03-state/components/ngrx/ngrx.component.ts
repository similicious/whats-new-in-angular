import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectTodo, selectTodoId } from './store/ngrx.reducer';
import { AsyncPipe } from '@angular/common';
import { TodoComponent } from '../todo/todo.component';
import { nextTodoRequested, pageEnter } from './store/ngrx.actions';

@Component({
  selector: 'app-ngrx',
  imports: [AsyncPipe, TodoComponent],
  templateUrl: './ngrx.component.html',
  styleUrl: './ngrx.component.scss',
})
export class NgrxComponent implements OnInit {
  store = inject(Store);

  todo$ = this.store.select(selectTodo);

  ngOnInit(): void {
    this.store.dispatch(pageEnter());
  }

  nextTodo() {
    this.store.dispatch(nextTodoRequested());
  }
}
