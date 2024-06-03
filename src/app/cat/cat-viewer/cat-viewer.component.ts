import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';

import { CatListComponent } from '../cat-list/cat-list.component';
import { GalleryComponent } from '../gallery/gallery.component';
import { CatService } from '../../core/services/cat.service';
import { Cat } from '../../core/models/cat.model';

@Component({
  selector: 'app-cat-viewer',
  standalone: true,
  imports: [NgIf, CatListComponent, GalleryComponent],
  templateUrl: './cat-viewer.component.html',
  styleUrl: './cat-viewer.component.css',
})
export class CatViewerComponent implements OnInit {
  cats!: Cat[];
  isGalleryView = true;

  constructor(private catService: CatService) {}

  ngOnInit(): void {
    this.catService.getCats().then((cats: Cat[]) => {
      this.cats = [];
    });
  }

  updateView() {
    this.isGalleryView = !this.isGalleryView;
  }
}
