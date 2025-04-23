import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  imports: [RouterLink],
  template: ` 
    
    <header class="toolbar">
      <a routerLink="/"><h1>Mosali</h1></a>
      <button class="logout-btn" (click)="onLogout()">Déconnexion</button>
    </header>

  `,
  styles: `
    .logout-btn{
      background: coral;
    }
  `
})
export class ToolbarComponent {
  private router = inject(Router);

  onLogout(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
