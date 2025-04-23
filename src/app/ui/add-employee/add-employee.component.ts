import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ReactiveFormComponent } from "./reactive-form.component";

@Component({
  selector: 'app-add-employee',
  imports: [RouterLink, ReactiveFormComponent],
  template: `
    <header class="toolbar navigation-back">
      <button routerLink="/"><</button>
      <h2>Nouvel employé</h2>
    </header>
    <app-reactive-form/>
  `,
  styles: `
    .navigation-back {
      justify-content: start;
      gap: 1rem
    }
  `
})
export default class AddEmployeeComponent {

}
