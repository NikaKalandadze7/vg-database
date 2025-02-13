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
  selector: 'app-log-in',
  imports: [RouterLink, FormsModule, NgIf, ReactiveFormsModule],

  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css',
})
export class LogInComponent {
  submitted = false;

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

  registerForm = new FormGroup({
    email: this.emailFormControl,
    password: this.passwordFormControl,
  });

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.valid) {
      console.log('form submitted:', this.registerForm.value);
    }
  }
}
