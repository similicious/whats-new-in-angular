import { Component, inject } from '@angular/core';
import { ServiceWithAnObservableService } from '../../services/service-with-an-observable.service';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { TodoComponent } from '../todo/todo.component';

@Component({
  selector: 'app-service-with-an-observable',
  imports: [AsyncPipe, TodoComponent],
  templateUrl: './service-with-an-observable.component.html',
  styleUrl: './service-with-an-observable.component.scss',
})
export class ServiceWithAnObservableComponent {
  serviceWithAnObservableService = inject(ServiceWithAnObservableService);
}
