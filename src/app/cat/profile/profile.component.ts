import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common';

import { CatService } from '../../core/services/cat.service';
import { Cat } from '../../core/models/cat.model';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [NgIf],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent implements OnInit {
  cat: Cat | undefined;

  constructor(private route: ActivatedRoute, private catService: CatService) {}

  ngOnInit(): void {
    const catId = this.route.snapshot.paramMap.get('id') ?? '';

    console.log('Cat Id ', catId);

    this.catService.getCat(catId).then((cat) => {
      console.log('CAT PROFILE ', cat);
      this.cat = cat;
    });
  }
}
