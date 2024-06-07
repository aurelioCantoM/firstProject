import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDatepickerInputEvent,DateRange } from '@angular/material/datepicker';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm = new FormGroup({
    firstName: new FormControl('', [Validators.pattern('[A-Z,a-z]*'), Validators.required]),
    lastName: new FormControl('', [Validators.pattern('[A-Z,a-z]*'), Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email, Validators.pattern('[a-zA-Z0-9._%+-]+@intelliswift.com')]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
    startDate: new FormControl('', [Validators.required]),
    endDate: new FormControl('', [Validators.required]),
    mobile: new FormControl('', [Validators.required]),
  }, []);

  constructor(){}

  processChange(arg0: string,$event: MatDatepickerInputEvent<any,DateRange<any>>) {
    throw new Error('Method not implemented.');
    }

  onSubmit() {
    const registerVals = this.registerForm.value;
    const isValidForm = this.registerForm.valid;
    debugger;
    if(!isValidForm){
      return
    }
  }
}
