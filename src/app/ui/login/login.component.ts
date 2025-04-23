import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  template: `
    <div class="container">
      <h1>Bienvenu sur Mosali</h1>
      <h3>Une application de gestion des employés</h3>
      <button (click)="onLoggin()">Connectez-vous</button>
    </div>
  `,
  styles: ``
})
export default class LoginComponent {
  private router = inject(Router);

  onLoggin = () => {
    localStorage.setItem('logged', 'true');
    this.router.navigate(['/']);
  }
}
