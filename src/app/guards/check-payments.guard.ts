
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { inject } from '@angular/core';
import { RegisterManagerService } from '../register/services/register-manager.service';

export const checkPaymentsGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const router = inject(Router);
    const managerService = inject(RegisterManagerService);
    if (managerService.isUserRegistered()) {
        return router.navigate(['home']);
    }
    return true;
}