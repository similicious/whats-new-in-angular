import { Component } from '@angular/core';
import { Deferred01Component } from '../deferred-01/deferred-01.component';
import { Deferred02Component } from '../deferred-02/deferred-02.component';
import { Deferred03Component } from '../deferred-03/deferred-03.component';

@Component({
  selector: 'app-part-01-deferred-views',
  imports: [Deferred01Component, Deferred02Component, Deferred03Component],
  templateUrl: './part-01-deferred-views.component.html',
  styleUrl: './part-01-deferred-views.component.scss',
})
export class Part01DeferredViewsComponent {}
