import { Component, OnInit } from '@angular/core';

import { CatService } from '../../core/services/cat.service';
import { PhotoComponent } from '../photo/photo.component';
import { Cat } from '../../core/models/cat.model';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [PhotoComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css',
})
export class GalleryComponent implements OnInit {
  cats!: Cat[];
  loaded = false;

  constructor(private catService: CatService) {}

  ngOnInit(): void {
    this.catService.getCats().then((cats) => {
      console.log('Cats ', cats);
      this.cats = cats;
      this.loaded = true;
    });
  }
}
