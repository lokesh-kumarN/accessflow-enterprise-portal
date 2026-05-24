import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  Validators
} from '@angular/forms';

import { Router } from '@angular/router';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-login',
  standalone: true,

  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule
  ],

  templateUrl: './login.html',
  styleUrls: ['./login.css']
})

export class Login {

  isLoading = false;

  loginForm!: any;

  allowedUsers = [

    {
      userId: 'admin',
      password: 'admin123',
      role: 'Admin'
    },

    {
      userId: 'user',
      password: 'user123',
      role: 'General User'
    }

  ];

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {

    this.loginForm = this.fb.group({

      userId: ['', Validators.required],

      password: ['', Validators.required],

      role: ['', Validators.required]

    });

  }

  onSubmit() {

    if (this.loginForm.valid) {

      const matchedUser = this.allowedUsers.find(

        (user: any) =>

          user.userId === this.loginForm.value.userId &&
          user.password === this.loginForm.value.password &&
          user.role === this.loginForm.value.role

      );

      if (matchedUser) {

        this.isLoading = true;

        setTimeout(() => {

          localStorage.setItem(
            'token',
            'enterprise-token'
          );

          localStorage.setItem(
            'user',
            JSON.stringify(this.loginForm.value)
          );

          this.isLoading = false;

          this.router.navigate(['/dashboard']);

        }, 1500);

      }

      else {

        alert('Invalid Employee Credentials');

      }

    }

  }

}