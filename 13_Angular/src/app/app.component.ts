import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div style="display: inline-flex;">
      <a class="nav-link" routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact:
        true}">Home</a>
      <a class="nav-link" routerLink="/games" routerLinkActive="active" [routerLinkActiveOptions]="{exact:
        true}">Games</a>
    </div>

    <router-outlet></router-outlet>
  `,
  styles: ['']
})
export class AppComponent {}
