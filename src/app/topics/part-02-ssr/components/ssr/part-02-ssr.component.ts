import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-part-02-ssr',
  imports: [RouterLink],
  templateUrl: './part-02-ssr.component.html',
  styleUrl: './part-02-ssr.component.scss',
})
export class Part02SsrComponent {
  counter = signal(0);

  increase() {
    this.counter.update((c) => c + 1);
  }
}
