import { ButtonComponent } from '@/app/components/buttons/button/button.component';
import { InputFieldComponent } from '@/app/components/forms/inputs/input-field/input-field.component';
import { ContainerComponent } from '@/app/main/layouts/container/container.component';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '@/app/lib/services/employee/employee.service';
import { FormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-new-employee',
  standalone: true,
  imports: [ContainerComponent,InputFieldComponent, 
            ButtonComponent,FormsModule,CommonModule ,
    MatInputModule],
  templateUrl: './new-employee.component.html',
  styleUrl: './new-employee.component.scss',
})


export class NewEmployeeComponent {

  constructor(
    private router: Router,
    private employeeService: EmployeeService
  ) {}

  lastname: String = '';
  firstname: String = '';
  email: String = '';
  password: String = '1234';

  isLoading: boolean = false;

  onSubmit() : void {

    this.isLoading = true;

    const newEmployee = {
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      password : this.password
    };

    this.employeeService.addEmployee(newEmployee).subscribe(
      response => {
        
        this.router.navigate(['manager/employees-management/employees-list']);
      },
      error => {
        console.error('Erreur lors de l\'inscription : ', error);
      }
    );
    
   
  }
}
