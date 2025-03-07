import { Observable } from 'rxjs';
import { Todo } from '../models/todo.model';
import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class TodoRepositoryService {
  http = inject(HttpClient);

  getTodoById$(id: number): Observable<Todo> {
    return this.http.get<Todo>(
      `https://jsonplaceholder.typicode.com/todos/${id}`,
    );
  }
}
