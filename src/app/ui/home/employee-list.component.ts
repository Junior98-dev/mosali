import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EmployeeService } from '../../core/services/employee.service';
import { EmployeeInfoComponent } from "./employee-info.component";

@Component({
  selector: 'app-employee-list',
  imports: [RouterLink, EmployeeInfoComponent],
  template: `
    <main>
      <header>
        <h3>Liste des employés</h3>
        <button routerLink="/add-employee">Nouvel employé</button>
      </header>
      <div class="employee-container">
        @for (employee of employees; track $index) {
          <a class="employee-card" [routerLink]="'/employees/'+ $index">
            <app-employee-info />
          </a>
          <br/>
        }@empty {
          <p align="center">Oups! la liste est vide ...! <br/>
             commencez par ajouter un employé.
          </p>
        }
      </div>

    </main>
  `,
  styles: `
    main{
      max-width: 1200px;
      margin: 1rem auto;

      header{
        display : flex;
        justify-content: space-between;
        align-items: center;
      }

      .employee-card{
        border: 1px solid grey;
        padding-left: 1rem;
        text-decoration: none;
        display: block;
        color: inherit;
        border-radius: 8px;
        transition: 250ms ease-in-out;

        &:hover{
          scale: 0.98;
        }
      }
    }
  
  `
})
export class EmployeeListComponent {
  private es = inject(EmployeeService);
  employees = this.es.getEmployees();

}
