import { Component, DestroyRef, inject } from '@angular/core';
import { RegisterManagerService } from '../register/services/register-manager.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { EMPTY_USER, User } from '../type-definitions/product-definitions';

enum BtnMsg {
  LOGIN = 'Login',
  REGISTER = 'Register',
  WELCOME = `Welcome`,
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

  private readonly destroyRef = inject(DestroyRef);
  isUserloggedIn = false;
  btnMsg: string;
  registrationMethod: ActionableRegistrtaion;
  registeredUser: User = EMPTY_USER;
  

  constructor(private authService: RegisterManagerService, private router: Router) {
    this.authService.isUserRegistered.pipe(
        takeUntilDestroyed(this.destroyRef),
      ).subscribe(isUserRegistered => {
      this.isUserloggedIn = isUserRegistered;
      this.toggleBtnMsg();
      } 
    );

    this.authService.loggedUser.pipe(
      takeUntilDestroyed(this.destroyRef),
    ).subscribe(user => {
      this.registeredUser = user;
      this.btnMsg = `Welcome ${user.firstName}!`
    });
    this.registrationMethod = ActionableRegistrtaion.LOGIN;
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

