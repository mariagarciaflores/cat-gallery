import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';

import { CatService } from '../../core/services/cat.service';
import { PhotoComponent } from '../photo/photo.component';
import { Cat } from '../../core/models/cat.model';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, NgFor, PhotoComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css',
})
export class GalleryComponent implements OnInit {
  cats!: Cat[];

  constructor(private catService: CatService) {}

  ngOnInit(): void {
    this.catService.getCats().then((cats) => {
      console.log('Cats ', cats);
      this.cats = cats;
    });
  }
}
