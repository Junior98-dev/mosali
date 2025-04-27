import { Component, inject, input, OnInit } from '@angular/core';
import { NavigationBackToolbarComponent } from "../shared/navigation-back-toolbar.component";
import { employee } from '../../core/models/employee.model';
import { EmployeeService } from '../../core/services/employee.service';
import { Router} from '@angular/router';
import { EmployeeInfoComponent } from "../home/employee-info.component";
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-detail-employee',
  imports: [NavigationBackToolbarComponent, EmployeeInfoComponent],
  template: `
   <app-navigation-back-toolbar [toolbarTitle]="employee ? employee.fullName : ''"/> 
   <app-employee-info [employee]="employee"/>
  `,
  styles: ``
})
export default class DetailEmployeeComponent implements OnInit {
  id = input();
  employee!:employee;
  private es = inject(EmployeeService);
  private router = inject(Router);
  private title = inject(Title);


  ngOnInit(): void {
    console.log(this.id());
    
    this.employee = this.es.getEmployee(Number(this.id()));
    if (this.employee) {
      this.title.setTitle(`${this.employee.fullName} - Mosali`);
    }else{
      this.router.navigate(['/']);
    }
  }

}
