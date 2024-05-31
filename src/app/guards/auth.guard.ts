import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { concatMap, map, switchMap } from 'rxjs';
import { UserService } from '../services/user.service';

export const authGuard: CanActivateFn = (route, state) => {
  const _authService = inject(AuthService);
  const _userService = inject(UserService);

  return _authService.isAuthenticated$.pipe(
    switchMap(isAuthenticated => 
      _authService.user$.pipe(
        concatMap(user => 
          _userService.getByAuth0Id(user?.sub || '').pipe(
            map(result => {
              _userService.user$.next(result);
              return isAuthenticated;
            })
          )
        )
      )
    )
  );
};