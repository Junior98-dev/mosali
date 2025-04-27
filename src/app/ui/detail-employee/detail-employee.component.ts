import { Component, inject, input, OnInit } from '@angular/core';
import { NavigationBackToolbarComponent } from "../shared/navigation-back-toolbar.component";
import { employee } from '../../core/models/employee.model';
import { EmployeeService } from '../../core/services/employee.service';

@Component({
  selector: 'app-detail-employee',
  imports: [NavigationBackToolbarComponent],
  template: `
   <app-navigation-back-toolbar [toolbarTitle]="employee.fullName"/> 
  `,
  styles: ``
})
export default class DetailEmployeeComponent implements OnInit {
  id = input();
  employee!:employee;
  private es = inject(EmployeeService);

  ngOnInit(): void {
    console.log(this.id());
    
    this.employee = this.es.getEmployee(Number(this.id()));
  }

}
