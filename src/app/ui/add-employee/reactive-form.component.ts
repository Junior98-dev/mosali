import { Component, inject, NgModule } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { employee } from '../../core/models/employee.model';
import { EmployeeService } from '../../core/services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule],
  template: `
    <form [formGroup]="employeeForm" class="form-container" (ngSubmit)="onSubmit()">

      @let controls = employeeForm.controls;

      <h4>Identité :</h4>
      <input placeholder="Nom complet" type="text" formControlName="fullName">
      @if(controls.fullName.hasError('required') && controls.fullName.touched){
        <span class="form-error">le nom est obligatoire</span>
      }

      <input placeholder="Email" type="email" formControlName="email">
      @if(controls.email.hasError('required') && controls.email.touched){
        <span class="form-error">Email est obligatoire</span>
      }
      @if(!controls.email.hasError('required') && controls.email.hasError('email')){
        <span class="form-error">Email est incorrect</span>
      }

      <input placeholder="téléphone" type="phone" formControlName="phone">
      @if(controls.phone.hasError('required') && controls.phone.touched){
        <span class="form-error">le numéro de téléphone est obligatoire</span>
      }
      @if(!controls.phone.hasError('required') && controls.phone.hasError('minLength') || controls.phone.hasError('required') && controls.phone.hasError('maxLength')){
        <span class="form-error">le numéro de téléphone est incorrect</span>
      }
      <select formControlName="sexe">
        <option value="">Selectionnez un sexe</option>
        <option value="M">Masculin</option>
        <option value="F">Féminin</option>
      </select>
      @if(controls.sexe.hasError('required') && controls.sexe.touched){
        <span class="form-error">le sexe est obligatoire</span>
      }

      <hr>
      <div [formGroup]="employeeForm.controls.address">
        @let adressControls = employeeForm.controls.address;
        <h4>Address :</h4>
        <input placeholder="Rue" type="text" formControlName="street">
        @if (adressControls.controls.street.hasError('required') && adressControls.controls.street.touched) {
          <span class="form-error">La Rue est obligatoire</span>
        }
        <input placeholder="Ville" type="text" formControlName="city">
        @if (adressControls.controls.city.hasError('required') && adressControls.controls.city.touched) {
          <span class="form-error">La ville est obligatoire</span>
        }
        <input placeholder="province" type="text" formControlName="state">
        <input placeholder="pays" type="text" formControlName="country">
        @if (adressControls.controls.country.hasError('required') && adressControls.controls.country.touched) {
          <span class="form-error">Le pays est obligatoire</span>
        }
      </div>

      <hr>

      <div formArrayName="hobbies">
        <h4>loisir :</h4>
        @for (hobbyForm of employeeForm.controls.hobbies.controls; track $index) {

          <div class="hobby-container">
            <input placeholder="Ex: chant, lecture, course à pied, enseignant" type="text" [formControlName]="$index">
            @if(hobbyForm.hasError('required') && hobbyForm.touched){
              <span class="form-error">Ce champ est obligatoire</span>
            }
            @if ($index) {
              <button (click)="removeFormHobby($index)" class="remove-hobby-btn" type="button"> Retirer</button>
            }
          </div>
        }
        <button (click)="addHobbyForm()" type="button"> Ajouter</button>
      </div>

      <hr>
      <div align="end">
        <button type="submit">Soumettre</button>
      </div>
    </form>
  `,
  styles: `
    .form-container{
      max-width: 720px;
      margin: 2rem auto;


      input, select{
        width: 100%;
        font-size: 1rem;
        margin: 0.5rem 0;
        padding: 0.5rem
      }

      .hobby-container{
        display: flex;
        justify-content: space-between;
        align-items: center;

        input{
          width: 80%;
        }

        span{
          width: 15%;
        }

        .remove-hobby-btn{
          background: red;
          height: 35px;
        }
      }
      .form-error{
        color: red;
      }
    }
  `
})
export class ReactiveFormComponent implements OnInit {
  private fb = inject(FormBuilder);
  private es = inject(EmployeeService);
  private router = inject(Router);   

  employeeForm = this.fb.nonNullable.group({
    fullName : ['', [Validators.required]],
    email: ['',[Validators.required, Validators.email]],
    phone: ['', [
      Validators.required, 
      Validators.minLength(9), 
      Validators.maxLength(12),
      Validators.pattern(/^\d+$/),
    ]],
    sexe: ['', [Validators.required]],
    address: this.fb.nonNullable.group({
      street: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: [''],
      country: ['',[Validators.required]]
    }),
    hobbies: this.fb.nonNullable.array([
      this.fb.nonNullable.control('',[Validators.required])
    ])
  })

  addHobbyForm(){
    const formControl = this.fb.nonNullable.control('');
    this.employeeForm.controls.hobbies.push(formControl);
  }

  removeFormHobby(index: number){
    this.employeeForm.controls.hobbies.removeAt(index)
  }

  onSubmit(){
    if (this.employeeForm.valid) {
      const employee:employee = {
        ...this.employeeForm.getRawValue(),
      }
      this.es.addEmployee(employee);
      this.router.navigate(['/']);
      
    }else{
      this.employeeForm.markAllAsTouched();
    }
  }
  ngOnInit(): void {
    const employee = this.router.getCurrentNavigation()?.extras.state?.['employee'];
    if (employee) {
      this.employeeForm.patchValue(employee);
    }
  }
}
