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
import { ICredentials } from '@/lib/types/authType';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
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
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  accountInexsitant: boolean = false;
  loginError: boolean = false;

  constructor(
    private builder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.buildLoginForm();
    this.loginForm.setValue({
      email: 'namtetsuya@gmail.com',
      password: 'eSN7smhw',
    });
  }

  buildLoginForm = () => {
    this.loginForm = this.builder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  };

  onSubmit = () => {
    if (this.loginForm.valid) {
      try {
        this.spinner.show();
        const credentials: ICredentials = {
          email: this.loginForm.value.email,
          password: this.loginForm.value.password,
        };
        this.authService.login(credentials).subscribe({
          next: ({ status, success, result }) => {
            if (status === 200 && success && result) {
              this.spinner.hide();
              this.router.navigate([`/client/example`]);
            } else if (!result) {
              this.accountInexsitant = true;
              this.spinner.hide();
            }
          },
          error: (error) => {
            this.loginError = true;
            this.spinner.hide();
            console.error(error);
          },
        });
      } catch (error) {
        this.loginError = true;
        console.error(error);
      }
    } else {
    }
  };
}
