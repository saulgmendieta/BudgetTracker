import { CanActivateFn, Router } from '@angular/router';
import { SecurityService } from './security/security.service';
import { inject } from '@angular/core';


export const loginGuardGuard: CanActivateFn = () => {
  return inject(SecurityService).getIsLogged()
    ? true
    : inject(Router).createUrlTree(['login']);
};