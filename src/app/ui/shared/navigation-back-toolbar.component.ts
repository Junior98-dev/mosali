import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navigation-back-toolbar',
  imports: [RouterLink],
  template: `
    <header class="toolbar navigation-back">
      <button routerLink="/"><</button>
      <h2>{{toolbarTitle()}}</h2>
    </header>
  `,
  styles: `
    .navigation-back {
      justify-content: start;
      gap: 1rem
    }
  `
})
export class NavigationBackToolbarComponent {
  toolbarTitle = input.required<string>();
}
