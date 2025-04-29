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

   <div class="employee-container">
      <app-employee-info [employee]="employee"/>

      <hr>

      <div class="actions">
        <button class="btn btn-primary" (click)="onEditEmployee(id(), employee)">Modifier</button>
        <button class="delete-btn" (click)="onDeleteEmployee(id())">Supprimer</button>
      </div>
   </div>
   
  `,
  styles: `
    .employee-container {
      max-width: 1200px;
      margin: 1rem auto;
    
    .actions {
      display: flex;
      justify-content: end;
      gap: 1rem;

      .delete-btn{
        background-color: red;
      }
    }
  }
  `
})
export default class DetailEmployeeComponent implements OnInit {

  id = input('id');
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

  onEditEmployee(id: string, employee: employee) {
    employee.id = id;
    this.router.navigate(['/add-employee'], {state: employee });
  }
  onDeleteEmployee(id: string) {
    this.es.deleteEmployee(Number(id));
    this.router.navigate(['/']);
  }

}
