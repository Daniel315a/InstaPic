import { Component, OnInit } from '@angular/core';

// Import the AuthService type from the SDK
import { Auth0ClientService, AuthService } from '@auth0/auth0-angular';


@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [],
  providers: [],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  constructor(public _authService: AuthService) { }

  // ngOnInit(): void {

  // }
  protected sesionAct() {
    return this._authService.isAuthenticated$.subscribe(
      (isAuthenticated) => {
      if (isAuthenticated) {
        this._authService.logout();
      }else{
        this._authService.loginWithRedirect();
      }
    });



  }
}
