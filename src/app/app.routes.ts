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
    path: '',
    loadComponent: () =>
      import('./home/home.component').then((c) => c.HomeComponent),
  },
];
