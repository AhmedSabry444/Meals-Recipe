import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender
  },{
    path: 'category/:categoryName',
    renderMode: RenderMode.Client,
  },
];
