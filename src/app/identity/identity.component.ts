import { Component, DestroyRef, computed, effect, inject } from '@angular/core';
import { ActionableRegistrtaion, RegisterManagerService } from '../register/services/register-manager.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { EMPTY_USER, User } from '../type-definitions/product-definitions';
import { RetailSessionStore } from '../retail-session-store/retail-session.store';
import { patchState } from '@ngrx/signals';

enum BtnMsg {
  LOGIN = 'Login',
  REGISTER = 'Register'
}


@Component({
  selector: 'app-identity',
  templateUrl: './identity.component.html',
  styleUrls: ['./identity.component.css']
})
export class IdentityComponent {
  private readonly cartStore = inject(RetailSessionStore);
  private readonly registerStore = inject(RegisterManagerService);
  readonly btnMsg = computed(() => {
    switch(this.registerStore.identityState.registrationMethod()) {
      case ActionableRegistrtaion.LOGIN: return 'Register';
      case ActionableRegistrtaion.REGISTER: return 'Login';
      case ActionableRegistrtaion.LOGGEDIN: return `Welcome, ${this.registerStore.identityState.registeredUser().firstName}!`;
    }
  });
  
  constructor(private router: Router) {}

  toggleAction() {
    console.log('Method: ', this.registerStore.identityState.registrationMethod())
    if(this.registerStore.identityState.registrationMethod() === ActionableRegistrtaion.LOGGEDIN) {
      patchState(this.registerStore.identityState, {registrationMethod: ActionableRegistrtaion.LOGIN, registeredUser: EMPTY_USER});
      patchState(this.cartStore.retailState, this.cartStore.setLoggedOutUser())
      this.router.navigate(['login']);
      return;
    }
    if(this.registerStore.identityState.registrationMethod() === ActionableRegistrtaion.LOGIN) {
      patchState(this.registerStore.identityState, {registrationMethod: ActionableRegistrtaion.REGISTER, registeredUser: EMPTY_USER});
      this.router.navigate(['register']);
      return;
    }
    if(this.registerStore.identityState.registrationMethod() === ActionableRegistrtaion.REGISTER) {
      patchState(this.registerStore.identityState, {registrationMethod: ActionableRegistrtaion.LOGIN, registeredUser: EMPTY_USER});
      this.router.navigate(['login']);
      return;
    }
  }
}

