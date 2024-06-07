import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterManagerService } from '../register/services/register-manager.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  get fc() { return this.loginForm.controls; }

  loginForm = new FormGroup({
    emailId: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@intelliswift.com')]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });

  constructor(private registerManager: RegisterManagerService) { }

  onSubmit() {
    debugger;
    if (this.loginForm.invalid) {
      return;
    }
    const emailId = this.fc.emailId.value;
    const password = this.fc.password.value;
    this.registerManager.validateUser(emailId, password);
  }
    
}