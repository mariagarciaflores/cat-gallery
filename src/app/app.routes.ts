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
      import('../app/cat/gallery/gallery.component').then(
        (mod) => mod.GalleryComponent
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
