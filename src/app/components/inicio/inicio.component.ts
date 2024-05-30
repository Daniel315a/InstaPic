import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-inicio',
  standalone: true,
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent  implements OnInit{

  constructor(
    private _authService: AuthService,
    private _userService: UserService,
    private _router: Router
  ) { }
  
  ngOnInit(): void {
    this._authService.isAuthenticated$.subscribe(
      (isAuthenticated) => {
      if (isAuthenticated) {
        this._authService.user$.subscribe(
          user => {
            console.log(user);

            if(user) {
              const userApp: User = {
                id: 0,
                auth0Id: user.sub || '',
                nickName: user.nickname || '',
                email: user.email || '',
                familyName: user.family_name || '',
                givenName: user.given_name || '',
                birthDate: new Date()
              };
  
              this._userService.save(userApp).subscribe(
                result => {
                  this._userService.user$.next(result);

                  this._router.navigate(['/profile']);
                }
              );
            }
          }
        );
      }
    });
  }

  protected login() {
    this._authService.loginWithRedirect();
  }

}