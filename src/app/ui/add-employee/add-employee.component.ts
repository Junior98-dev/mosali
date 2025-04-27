import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ReactiveFormComponent } from "./reactive-form.component";
import { NavigationBackToolbarComponent } from "../shared/navigation-back-toolbar.component";

@Component({
  selector: 'app-add-employee',
  imports: [ReactiveFormComponent, NavigationBackToolbarComponent],
  template: `
   <app-navigation-back-toolbar/>
    <app-reactive-form/>
  `,
  styles: `
    
  `
})
export default class AddEmployeeComponent {

}
