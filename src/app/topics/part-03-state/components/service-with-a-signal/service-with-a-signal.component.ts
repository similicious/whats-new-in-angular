import { Component, inject } from '@angular/core';
import { ServiceWithASignalService } from '../../services/service-with-a-signal.service';
import { TodoComponent } from '../todo/todo.component';

@Component({
  selector: 'app-service-with-a-signal',
  imports: [TodoComponent],
  templateUrl: './service-with-a-signal.component.html',
  styleUrl: './service-with-a-signal.component.scss',
})
export class ServiceWithASignalComponent {
  serviceWithASignal = inject(ServiceWithASignalService);

  todo = this.serviceWithASignal.todo;

  nextTodo() {
    this.serviceWithASignal.nextTodo();
  }
}
