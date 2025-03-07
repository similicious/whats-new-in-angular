import { inject, Injectable, signal, effect } from '@angular/core';
import { TodoRepositoryService } from './todo-repository.service';
import { Todo } from '../models/todo.model';

@Injectable({ providedIn: 'root' })
export class ServiceWithASignalService {
  todoRepositoryService = inject(TodoRepositoryService);

  private todoId = signal<number>(1);
  public todo = signal<Todo | undefined>(undefined);

  private getTodo = effect(() => {
    this.todoRepositoryService
      .getTodoById$(this.todoId())
      .subscribe((todo) => this.todo.set(todo));
  });

  public nextTodo() {
    this.todoId.update((value) => value + 1);
  }
}
