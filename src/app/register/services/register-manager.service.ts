import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { usersData } from 'src/app/model/products-list.model';
import { User } from 'src/app/type-definitions/product-definitions';

@Injectable({
  providedIn: 'root'
})
export class RegisterManagerService {
  isUserRegistered: BehaviorSubject<boolean>;
  protected readonly userList: BehaviorSubject<Array<User>>;
  loggedUser: Subject<User> = new Subject<User>();

  constructor() { 
    this.userList = new BehaviorSubject(usersData);
    this.isUserRegistered = new BehaviorSubject(false);
  }

  private setUserLoggedIn(){
    this.isUserRegistered.next(true);
  }

  setUserLoggedOut() {
    this.isUserRegistered.next(false);
  }

  validateUser(mail: string | null, password: string | null): Record<string, any> {
    let userExists = false;
    let passwordMatch = false;
    if(mail === null || password === null) {
      return {userExists, passwordMatch};
    }
    const userNdx = this.userList.value.findIndex(user => user.email === mail);
    if (userNdx !== -1) {
      userExists = true;
      if (this.userList.value[userNdx].password === password) {
        passwordMatch = true;
        this.loggedUser.next(this.userList.value[userNdx]);
        this.setUserLoggedIn();
      }
    }
    return {userExists, passwordMatch};
  }
}
