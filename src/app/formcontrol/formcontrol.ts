import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  NgForm,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-formcontrol',
  imports: [ReactiveFormsModule, NgIf, FormsModule],
  templateUrl: './formcontrol.html',
  styleUrl: './formcontrol.css',
})
export class Formcontrol {
  // Driven Form
  firstName = new FormControl();
  lastName = new FormControl();
  email = new FormControl();

  getUserDetails() {
    console.log('FirstName: ', this.firstName.value);
    console.log('lastName: ', this.lastName.value);
    console.log('Email: ', this.email.value);
  }

  setUserDetails() {
    this.firstName.setValue('Default FirstName');
    this.lastName.setValue('Default LastName');
    this.email.setValue('Default Email');
  }

  // Template Driven 2
  // step 1: With Form
  userDetails: NgForm | null = null;

  printUserDetails(form: NgForm) {
    console.log(form);
    this.userDetails = form;
  }

  // step 1: With Form Value
  // userDetails: any = null;

  // printUserDetails(formValue: any) {
  //   console.log(formValue);
  //   this.userDetails = formValue;
  // }

  // Reactive Form
  reactiveForm = new FormGroup({
    firstName: new FormControl('abc'),
    lastName: new FormControl('xyz'),
    email: new FormControl('abc.xyz@gmail.com'),
  });

  formSubmit() {
    console.log(this.reactiveForm.value);
  }

  setDetails() {
    this.reactiveForm.setValue({
      firstName: 'Ronak',
      lastName: 'Javia',
      email: 'ronak.javia@gmail.com',
    });
  }

  // Reactive Form with Validators
  reactiveFormWithValidator = new FormGroup({
    name: new FormControl('', [Validators.required]),
    age: new FormControl(0, [Validators.required, Validators.min(5), Validators.max(30)]),
    email: new FormControl('', [Validators.required, Validators.maxLength(20), Validators.email]),
  });

  get getName() {
    return this.reactiveFormWithValidator.get('name');
  }

  get getAge() {
    return this.reactiveFormWithValidator.get('age');
  }

  get getEmail() {
    return this.reactiveFormWithValidator.get('email');
  }

  clearFormWithValidator() {
    this.reactiveFormWithValidator.setValue({
      name: '',
      age: 0,
      email: '',
    });
  }

  formSubmitWithValidator() {
    console.log(this.reactiveFormWithValidator.value);
  }
}
