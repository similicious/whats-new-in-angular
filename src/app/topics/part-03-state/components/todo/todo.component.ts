import { Component, input, output } from '@angular/core';
import { Todo } from '../../models/todo.model';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-todo',
  imports: [JsonPipe],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent {
  todo = input<Todo>();
  nextTodoRequested = output();
}
