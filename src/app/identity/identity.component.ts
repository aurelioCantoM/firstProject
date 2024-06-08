import { Component, DestroyRef, effect, inject } from '@angular/core';
import { RegisterManagerService } from '../register/services/register-manager.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { EMPTY_USER, User } from '../type-definitions/product-definitions';

enum BtnMsg {
  LOGIN = 'Login',
  REGISTER = 'Register'
}

enum ActionableRegistrtaion {
  LOGIN,
  REGISTER,
}

@Component({
  selector: 'app-identity',
  templateUrl: './identity.component.html',
  styleUrls: ['./identity.component.css']
})
export class IdentityComponent {

  isUserloggedIn = false;
  btnMsg: string;
  registrationMethod: ActionableRegistrtaion;
  registeredUser: User = EMPTY_USER;
  
  constructor(private authService: RegisterManagerService, private router: Router) {
    const userRegisteredEffect = effect(() => {
      this.isUserloggedIn = this.authService.isUserRegistered();
      this.toggleBtnMsg();
      console.log('is used logged in? ', this.isUserloggedIn);
    });
    const loggedUserData = effect(() => {
      this.registeredUser = this.authService.loggedUser();
      if(this.registeredUser !== EMPTY_USER) {
        this.btnMsg = `Welcome ${this.registeredUser.firstName}!`
      }
      console.log(this.registeredUser);
    });
    //this.registrationMethod = ActionableRegistrtaion.LOGIN;
    this.toggleBtnMsg();
   }

  //use auth service to know whether to display the login/register button or the identity of the user.

  toggleBtnMsg() {
    if (this.isUserloggedIn) {
      this.btnMsg = `Welcome ${this.registeredUser.firstName}!`
    } else {
      if(this.registrationMethod === ActionableRegistrtaion.LOGIN) {
        this.btnMsg = BtnMsg.REGISTER;
      } else {
        this.btnMsg = BtnMsg.LOGIN;
      }
    }
  }

  toggleAction() {
    if(this.isUserloggedIn) {
      this.authService.setUserLoggedOut();
    } else {
      if(!this.isUserloggedIn && this.registrationMethod === ActionableRegistrtaion.LOGIN){
        this.registrationMethod = ActionableRegistrtaion.REGISTER;
        this.router.navigate(['register']);
      } else {
        this.registrationMethod = ActionableRegistrtaion.LOGIN;
        this.toggleBtnMsg();
        this.router.navigate(['login']);
      }
    }
    this.toggleBtnMsg();
  }
}

