import { Component, Input } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';

import { Cat } from '../../core/models/cat.model';

@Component({
  selector: 'app-cat-list',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './cat-list.component.html',
  styleUrl: './cat-list.component.css',
})
export class CatListComponent {
  @Input() data!: Cat[];
}
