import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  imports: [RouterLink],
  template: `
    <main>
      <header>
        <h3>Liste des employés</h3>
        <button routerLink="/add-employee">Nouvel employé</button>
      </header>
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
    }
  
  `
})
export class EmployeeListComponent {

}
