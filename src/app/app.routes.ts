import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'deferred-views',
    loadComponent: () =>
      import(
        './topics/part-01-deferred-views/components/deferred-views/part-01-deferred-views.component'
      ).then((c) => c.Part01DeferredViewsComponent),
  },
  {
    path: 'ssr',
    loadComponent: () =>
      import('./topics/part-02-ssr/components/ssr/part-02-ssr.component').then(
        (c) => c.Part02SsrComponent,
      ),
  },
  {
    path: 'ssr/no',
    loadComponent: () =>
      import('./topics/part-02-ssr/components/no-ssr/no-ssr.component').then(
        (c) => c.NoSsrComponent,
      ),
  },
  {
    path: 'state/observable',
    loadComponent: () =>
      import(
        './topics/part-03-state/components/service-with-an-observable/service-with-an-observable.component'
      ).then((c) => c.ServiceWithAnObservableComponent),
  },
  {
    path: 'state/signal',
    loadComponent: () =>
      import(
        './topics/part-03-state/components/service-with-a-signal/service-with-a-signal.component'
      ).then((c) => c.ServiceWithASignalComponent),
  },
  {
    path: 'state/signal-store',
    loadComponent: () =>
      import(
        './topics/part-03-state/components/signal-store/signal-store.component'
      ).then((c) => c.SignalStoreComponent),
  },
  {
    path: 'state/ngrx',
    loadComponent: () =>
      import('./topics/part-03-state/components/ngrx/ngrx.component').then(
        (c) => c.NgrxComponent,
      ),
  },
  {
    path: '',
    loadComponent: () =>
      import('./home/home.component').then((c) => c.HomeComponent),
  },
];
