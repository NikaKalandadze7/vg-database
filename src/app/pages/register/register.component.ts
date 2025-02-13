import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-register',
  imports: [RouterLink, FormsModule, NgIf, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  submitted = false;

  firstNameFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(1),
  ]);
  lastNameFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(1),
  ]);
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
    Validators.pattern(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    ),
  ]);
  confirmPasswordFormControl = new FormControl('', [Validators.required]);

  registerForm = new FormGroup({
    firstName: this.firstNameFormControl,
    lastName: this.lastNameFormControl,
    email: this.emailFormControl,
    password: this.passwordFormControl,
    confirmPassword: this.confirmPasswordFormControl,
  });

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.valid) {
      console.log('form submitted:', this.registerForm.value);
    }
  }
}
