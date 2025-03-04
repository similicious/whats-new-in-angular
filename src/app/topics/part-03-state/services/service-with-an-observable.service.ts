import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, filter, switchMap } from 'rxjs';
import { TodoRepositoryService } from './todo-repository.service';

@Injectable({ providedIn: 'root' })
export class ServiceWithAnObservableService {
  todoRepositoryService = inject(TodoRepositoryService);

  private todoIdSub = new BehaviorSubject<number>(1);
  public todoId$ = this.todoIdSub.asObservable();

  public todo$ = this.todoId$.pipe(
    filter((id) => !!id),
    switchMap((id) => this.todoRepositoryService.getTodoById(id)),
  );

  public nextTodo() {
    this.todoIdSub.next(this.todoIdSub.value + 1);
  }
}
