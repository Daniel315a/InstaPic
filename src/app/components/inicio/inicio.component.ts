import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-inicio',
  standalone: true,
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent  implements OnInit{

  constructor(
    private _authService: AuthService,
    private _router: Router
  ) { }
  
  ngOnInit(): void {
    this._authService.isAuthenticated$.subscribe(
      (isAuthenticated) => {
      if (isAuthenticated) {
        this._router.navigate(['/profile']);
      }
    });
  }

  protected login() {
    this._authService.loginWithRedirect();
  }

}