import { createFeature, createReducer, on } from '@ngrx/store';
import { Todo } from '../../../models/todo.model';
import { loadTodoSucceeded, nextTodoRequested } from './ngrx.actions';

interface NgrxState {
  todoId: number;
  todo: Todo | undefined;
}

const initialState: NgrxState = {
  todoId: 1,
  todo: undefined,
};

const ngrxFeature = createFeature({
  name: 'ngrx',
  reducer: createReducer(
    initialState,
    on(loadTodoSucceeded, (state, { todo }) => ({ ...state, todo })),
    on(nextTodoRequested, (state) => ({ ...state, todoId: state.todoId + 1 })),
  ),
});

export const { reducer, selectTodo, selectTodoId } = ngrxFeature;
