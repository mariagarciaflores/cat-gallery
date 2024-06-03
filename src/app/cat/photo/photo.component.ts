import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Cat } from '../../core/models/cat.model';

@Component({
  selector: 'app-photo',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './photo.component.html',
  styleUrl: './photo.component.css',
})
export class PhotoComponent {
  @Input() data!: Cat;
}
