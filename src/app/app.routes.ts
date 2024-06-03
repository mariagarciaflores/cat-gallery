import { Routes } from '@angular/router';
import { GalleryComponent } from '../app/cat/gallery/gallery.component';
import { ProfileComponent } from './cat/profile/profile.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'gallery',
  },
  {
    path: 'gallery',
    component: GalleryComponent,
  },
  {
    path: 'gallery/:id',
    component: ProfileComponent,
  },
];
