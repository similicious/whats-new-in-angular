import { Component, inject } from '@angular/core';
import { SignalStoreStore } from './signal-store.store';
import { TodoComponent } from '../todo/todo.component';

@Component({
  selector: 'app-signal-store',
  imports: [TodoComponent],
  templateUrl: './signal-store.component.html',
  styleUrl: './signal-store.component.scss',
  providers: [SignalStoreStore],
})
export class SignalStoreComponent {
  protected readonly signalStoreStore = inject(SignalStoreStore);
}
