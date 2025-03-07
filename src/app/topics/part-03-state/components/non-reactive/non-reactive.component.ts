import { ChangeDetectorRef, Component, inject } from '@angular/core';

@Component({
  selector: 'app-non-reactive',
  imports: [],
  templateUrl: './non-reactive.component.html',
  styleUrl: './non-reactive.component.scss',
})
export class NonReactiveComponent {
  private readonly changeDetectorRef = inject(ChangeDetectorRef);
  message = 'Simon';

  modifyState() {
    // not really reactive
    this.message += ' is cool.';

    // not needed thanks to Angular magic (zone.js)
    // but not great for performance
    this.changeDetectorRef.detectChanges();
  }
}
