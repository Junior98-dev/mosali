import { Component } from '@angular/core';
import { ToolbarComponent } from "./toolbar.component";
import { EmployeeListComponent } from "./employee-list.component";

@Component({
  selector: 'app-home',
  imports: [ToolbarComponent, EmployeeListComponent],
  template: `
    <app-toolbar/>
    <app-employee-list/>
  `,
  styles: ``
})
export default class HomeComponent {

}
