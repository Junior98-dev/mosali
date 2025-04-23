import { Component } from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  imports: [FormsModule],
  template: `

    <form action="" class="form-container" #contactForm="ngForm" (ngSubmit)="onSubmit(contactForm)">
      <input placeholder="Nom complet" type="text" name="fullname" [(ngModel)]="formData.fullname" required>
      <input placeholder="Email" type="email" name="email" [(ngModel)]="formData.email" required>
      <textarea 
        placeholder="votre message" 
        name="message"
        cols="30"
        rows="5"
        [(ngModel)]="formData.message" required>
      </textarea>

      <div align="end">
        <button type="submit" [disabled]="contactForm.invalid" [class.invalid-form-btn]="contactForm.invalid">Soumettre</button>
      </div>
    </form>
  `,
  styles: `
    .form-container{
      max-width: 720px;
      margin: 4rem auto;

      input, textarea{
        width: 100%;
        font-size: 1rem;
        margin: 0.5rem 0;
        padding: 0.5rem;
        outline: none;
      }

      .invalid-form-btn{
        background: grey;
        opacity: 0.5;
      }

      input:user-valid,
      textarea:user-valid{
        border-color: green;
      }

      input:user-invalid,
      textarea:user-invalid{
        border-color: red;
      }
    }
  `
})
export class TemplateDrivenFormComponent {
  formData = {
    fullname: '',
    email: '',
    message: ''
  }

  onSubmit(contactForm : NgForm){
    console.log('Données du formulaire', contactForm.value)
    contactForm.reset();
  }
}
