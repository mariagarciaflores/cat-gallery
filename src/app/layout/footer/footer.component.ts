import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
    <footer>
      <span>
        API powered by <a href="https://thecatapi.com/">TheCatAPI</a>
      </span>
    </footer>
  `,
  styles: ``,
})
export class FooterComponent {}
