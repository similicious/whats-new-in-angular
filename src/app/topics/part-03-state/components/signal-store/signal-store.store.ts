import {
  patchState,
  signalStore,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';
import { Todo } from '../../models/todo.model';
import { effect, inject } from '@angular/core';
import { TodoRepositoryService } from '../../services/todo-repository.service';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap, tap } from 'rxjs';
import { updateState, withDevtools } from '@angular-architects/ngrx-toolkit';

type SignalStoreState = { todo?: Todo; todoId: number };

const initialState: SignalStoreState = { todoId: 1, todo: undefined };

export const SignalStoreStore = signalStore(
  withDevtools('todos'),
  withState(initialState),
  withMethods(
    (store, todoRepositoryService = inject(TodoRepositoryService)) => ({
      getTodo: rxMethod<number>(
        pipe(
          switchMap((todoId) => todoRepositoryService.getTodoById$(todoId)),
          tap((todo) => updateState(store, '[Todo Signal] getById', { todo })),
        ),
      ),
      nextTodo() {
        updateState(store, '[Todo Signal] next', (state) => ({
          todoId: state.todoId + 1,
        }));
      },
    }),
  ),
  withHooks({
    onInit(store) {
      effect(() => store.getTodo(store.todoId()));
    },
  }),
);
