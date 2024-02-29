import { Component, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ButtonComponent } from '@/app/components/buttons/button/button.component';
import { InputFieldComponent } from '@/app/components/forms/inputs/input-field/input-field.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
import { IEmployeePayload } from '@/lib/types/employeeType';
import { EmployeeService } from '@/app/lib/services/employee/employee.service';
import { ContainerComponent } from '@/app/main/layouts/container/container.component';

@Component({
  selector: 'app-new-employee',
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
    ContainerComponent,
  ],
  templateUrl: './new-employee.component.html',
  styleUrl: './new-employee.component.scss',
})
export class NewEmployeeComponent implements OnInit {
  registerForm!: FormGroup;
  alreadyExists: boolean = false;
  registerError: boolean = false;

  constructor(
    private builder: FormBuilder,
    private employeeService: EmployeeService,
    private router: Router,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.buildRegisterForm();
  }

  buildRegisterForm = () => {
    this.registerForm = this.builder.group({
      lastname: ['', [Validators.required]],
      firstname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  };

  onSubmit = () => {
    if (this.registerForm.valid) {
      try {
        const payload: IEmployeePayload = {
          lastname: this.registerForm.value.lastname,
          firstname: this.registerForm.value.firstname,
          email: this.registerForm.value.email,
        };
        this.spinner.show();
        this.employeeService.saveEmployee(payload).subscribe({
          next: ({ status, success, result }) => {
            if (status === 201 && success && result) {
              this.spinner.hide();
              this.router.navigate([
                'manager/employees-management/employees-list',
              ]);
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
