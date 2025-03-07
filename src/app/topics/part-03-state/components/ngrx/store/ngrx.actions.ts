import { createAction, props } from '@ngrx/store';
import { Todo } from '../../../models/todo.model';

export const pageEnter = createAction('[Todo] Page enter');
export const loadTodo = createAction(
  '[Todo] Load',
  props<{ todoId: number }>(),
);
export const loadTodoSucceeded = createAction(
  '[Todo] Load succeeded',
  props<{ todo: Todo }>(),
);
export const loadTodoFailed = createAction(
  '[Todo] Load failed',
  props<{ error: string }>(),
);
export const nextTodoRequested = createAction('[Todo] Next todo requested');
