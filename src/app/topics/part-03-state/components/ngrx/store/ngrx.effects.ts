import { inject, Injectable } from '@angular/core';
import { TodoRepositoryService } from '../../../services/todo-repository.service';
import { Store } from '@ngrx/store';
import { selectTodoId } from './ngrx.reducer';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, withLatestFrom } from 'rxjs/operators';
import {
  loadTodoSucceeded,
  nextTodoRequested,
  pageEnter,
} from './ngrx.actions';

@Injectable()
export class NgrxEffects {
  private readonly todoRepositoryService = inject(TodoRepositoryService);
  private readonly store = inject(Store);
  private readonly actions = inject(Actions);

  loadTodo$ = createEffect(() =>
    this.actions.pipe(
      ofType(nextTodoRequested, pageEnter),
      withLatestFrom(this.store.select(selectTodoId)),
      switchMap(([_, todoId]) =>
        this.todoRepositoryService.getTodoById$(todoId),
      ),
      map((todo) => loadTodoSucceeded({ todo })),
    ),
  );
}
