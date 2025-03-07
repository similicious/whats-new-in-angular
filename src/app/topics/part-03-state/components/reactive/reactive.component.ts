import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-reactive',
  imports: [],
  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.scss',
})
export class ReactiveComponent {
  message = signal('Simon');

  modifyState() {
    this.message.update((message) => message + ' is cool.');
  }
}
