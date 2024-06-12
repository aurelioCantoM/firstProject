import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { ActionableRegistrtaion, RegisterManagerService } from './register/services/register-manager.service';
import { of } from 'rxjs';

export const registerGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const registerManager = inject(RegisterManagerService);
  if(registerManager.identityState.registrationMethod() === ActionableRegistrtaion.LOGGEDIN) {
    router.navigate(['home']);
    return false;
  }
    return true;
}
