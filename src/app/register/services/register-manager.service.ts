import { Injectable, WritableSignal, signal } from '@angular/core';
import { usersData } from 'src/app/model/products-list.model';
import { EMPTY_USER, User } from 'src/app/type-definitions/product-definitions';

@Injectable({
  providedIn: 'root'
})
export class RegisterManagerService {
  isUserRegistered:WritableSignal<boolean>;
  protected readonly userList: WritableSignal<Array<User>>;
  loggedUser: WritableSignal<User>;


  constructor(){
    this.isUserRegistered = signal(false);
    this.loggedUser = signal(EMPTY_USER);
    this.userList = signal(usersData);
  }
  private setUserLoggedIn(){
    this.isUserRegistered.update(() => true);
    console.log('private: user is now registered!');
  }

  setUserLoggedOut() {
    console.log('public: user is now unregistered!');
    this.isUserRegistered.update(() => false);

  }

  validateUser(mail: string | null, password: string | null): Record<string, any> {
    let userExists = false;
    let passwordMatch = false;
    if(mail === null || password === null) {
      return {userExists, passwordMatch};
    }
    const userNdx = this.userList().findIndex(user => user.email === mail);
    if (userNdx !== -1) {
      userExists = true;
      if (this.userList()[userNdx].password === password) {
        passwordMatch = true;
        this.loggedUser.update(() => this.userList()[userNdx]);
        this.setUserLoggedIn();
      }
    }
    return {userExists, passwordMatch};
  }
}
