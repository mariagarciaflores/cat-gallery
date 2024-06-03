import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'gallery',
  },
  {
    path: 'gallery',
    loadComponent: () =>
      import('../app/cat/cat-viewer/cat-viewer.component').then(
        (mod) => mod.CatViewerComponent
      ),
  },
  {
    path: 'gallery/:id',
    loadComponent: () =>
      import('../app/cat/profile/profile.component').then(
        (mod) => mod.ProfileComponent
      ),
  },
];
