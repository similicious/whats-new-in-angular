import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'deferred-views',
    loadComponent: () =>
      import(
        './components/part-01-deferred-views/part-01-deferred-views.component'
      ).then((c) => c.Part01DeferredViewsComponent),
  },
  {
    path: 'ssr',
    loadComponent: () =>
      import('./components/part-02-ssr/part-02-ssr.component').then(
        (c) => c.Part02SsrComponent,
      ),
  },
  {
    path: 'ssr/no',
    loadComponent: () =>
      import('./components/part-02-ssr/no-ssr/no-ssr.component').then(
        (c) => c.NoSsrComponent,
      ),
  },
  {
    path: '',
    loadComponent: () =>
      import('./components/home/home.component').then((c) => c.HomeComponent),
  },
];
