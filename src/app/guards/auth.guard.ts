import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { map } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {

  const _authService = inject(AuthService);

  return _authService.isAuthenticated$.pipe(
    map((isAuthenticated) => {return isAuthenticated})
  );

  // return false;
};
