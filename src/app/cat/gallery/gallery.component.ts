import { Component, Input } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';

import { PhotoComponent } from '../photo/photo.component';
import { Cat } from '../../core/models/cat.model';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, NgFor, NgIf, PhotoComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css',
})
export class GalleryComponent {
  @Input() data!: Cat[];
}
