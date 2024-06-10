import { PartialStateUpdater, signalState, withState } from '@ngrx/signals'
import { Cart, EMPTY_CART, EMPTY_USER, User } from '../type-definitions/product-definitions'
import { Injectable, inject } from '@angular/core';
import { RegisterManagerService } from '../register/services/register-manager.service';

export interface RetailSession {
  isUserLoggedIn: boolean,
  userCart: Cart,
  paymentOptions?: Array<Record<string, any>>, //TODO [AC]: this will be an array of PaymentMethod interface
  loggedUser: User,
}

@Injectable()
export class RetailSessionStore {
  readonly #registerManagerService = inject(RegisterManagerService);
  
  readonly retailState = signalState<RetailSession>({
    isUserLoggedIn: false,
    userCart: EMPTY_CART,
    loggedUser: EMPTY_USER,
    paymentOptions: [],
  });

  setLoggedInUser(loggedUser: User): PartialStateUpdater<{loggedUser: User, isUserLoggedIn: boolean}> {
    return (state) => ({user: loggedUser, isUserLoggedIn: true});
  }

  
}