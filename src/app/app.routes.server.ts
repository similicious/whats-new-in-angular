import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'deferred-views',
    renderMode: RenderMode.Server,
  },
  {
    path: 'ssr/no',
    renderMode: RenderMode.Client,
  },
  {
    path: 'ssr',
    renderMode: RenderMode.Prerender,
  },
  {
    path: '**',
    renderMode: RenderMode.Client,
  },
];
