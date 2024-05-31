import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { AuthService } from '@auth0/auth0-angular';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    MenuComponent,
    RouterOutlet
  ],
  templateUrl: './root.component.html',
  styleUrl: './root.component.css'
})
export class RootComponent {
  protected isAuthenticated$: Observable<boolean> = this._authService.isAuthenticated$;

  constructor(
    private _authService: AuthService
  ) {

  }

}
