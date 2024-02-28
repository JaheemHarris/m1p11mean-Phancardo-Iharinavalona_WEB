import { Component, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ButtonComponent } from '@/app/components/buttons/button/button.component';
import { InputFieldComponent } from '@/app/components/forms/inputs/input-field/input-field.component';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AuthService } from '@/app/lib/services/auth/auth.service';
import { IRegisterPayload } from '@/lib/types/authType';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    InputFieldComponent,
    ButtonComponent,
    NgOptimizedImage,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    CommonModule,
    RouterModule,
    NgxSpinnerModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  alreadyExists: boolean = false;
  registerError: boolean = false;

  constructor(
    private builder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.buildRegisterForm();
  }

  buildRegisterForm = () => {
    this.registerForm = this.builder.group(
      {
        lastname: ['', [Validators.required]],
        firstname: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required],
      },
      { validator: this.passwordMatchValidator }
    );
  };

  passwordMatchValidator = (form: FormGroup) => {
    const passwordControl = form.get('password');
    const confirmPasswordControl = form.get('confirmPassword');
    if (passwordControl && confirmPasswordControl) {
      if (passwordControl.value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({ passwordMismatch: true });
      } else {
        confirmPasswordControl.setErrors(null);
      }
    }
  };

  onSubmit = () => {
    if (this.registerForm.valid) {
      try {
        const payload: IRegisterPayload = {
          lastname: this.registerForm.value.lastname,
          firstname: this.registerForm.value.firstname,
          email: this.registerForm.value.email,
          password: this.registerForm.value.password,
        };
        this.spinner.show();
        this.authService.register(payload).subscribe({
          next: ({ status, success, result }) => {
            if (status === 201 && success && result) {
              this.router.navigate([`/login`]);
              this.spinner.hide();
              setTimeout(() => {
                this.spinner.hide();
                this.router.navigate([`/login`]);
              }, 1500);
            } else if (!result) {
              this.alreadyExists = true;
              this.spinner.hide();
            }
          },
          error: (error) => {
            this.registerError = true;
            this.spinner.hide();
            console.log(error);
          },
        });
      } catch (error) {
        this.registerError = true;
        console.log(error);
      }
    } else {
    }
  };
}
