import { Component, input } from '@angular/core';
import { employee } from '../../core/models/employee.model';

@Component({
  selector: 'app-employee-info',
  imports: [],
  template: `
    <h4>{{employee().fullName}}</h4>
    <h5>{{employee().email}} - +{{employee().phone}} - Sexe: {{employee().sexe}}</h5>
    <p>Adresse: {{employee().address.street}} - {{employee().address.city}}/{{employee().address.state}}/{{employee().address.country}}</p>
    @for (hobby of employee().hobbies; track $index) {
      <p>passe-temps: N°{{$index + 1}} - {{hobby}}</p>
    }
    
  `,
  styles: ``
})
export class EmployeeInfoComponent {
  employee = input.required<employee>();
}
