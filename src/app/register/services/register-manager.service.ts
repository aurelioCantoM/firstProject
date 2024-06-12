import { Injectable, Signal, WritableSignal, inject, signal } from '@angular/core';
import { patchState, signalState } from '@ngrx/signals';
import { usersData } from 'src/app/model/products-list.model';
import { RetailSessionStore } from 'src/app/retail-session-store/retail-session.store';
import { EMPTY_USER, User } from 'src/app/type-definitions/product-definitions';


export interface IdentityState {
  registrationMethod: ActionableRegistrtaion,
  registeredUser: User,
  userList: Array<User>,
}

export enum ActionableRegistrtaion {
  LOGIN,
  REGISTER,
  LOGGEDIN,
}

@Injectable({
  providedIn: 'root'
})
export class RegisterManagerService {
  
  readonly identityState = signalState<IdentityState>({
    registrationMethod: ActionableRegistrtaion.LOGIN,
    registeredUser: EMPTY_USER,
    userList: usersData,
  });
  
  constructor(private readonly retailStore: RetailSessionStore) {}
  
  validateUser(mail: string, password: string) {
    const usersList = this.identityState.userList();
    if(mail === null || password === null) {
      return;
    }
    const userNdx = usersList.findIndex(user => user.email === mail);
    if (userNdx !== -1) {
      if (this.identityState.userList()[userNdx].password === password) {
        patchState(this.identityState, {registrationMethod: ActionableRegistrtaion.LOGGEDIN, registeredUser: usersList[userNdx]});
        patchState(this.retailStore.retailState, this.retailStore.setLoggedInUser(usersList[userNdx]));
      }
    }
  }
}
