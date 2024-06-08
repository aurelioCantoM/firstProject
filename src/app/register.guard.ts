import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { RegisterManagerService } from './register/services/register-manager.service';

export const registerGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
    const managerService = inject(RegisterManagerService);
    if (managerService.isUserRegistered()) {
        return router.navigate(['home']);
    }
    return true;
};
