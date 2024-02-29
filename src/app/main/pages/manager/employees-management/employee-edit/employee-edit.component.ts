import { Component } from '@angular/core';
import { ButtonComponent } from '@/app/components/buttons/button/button.component';
import { InputFieldComponent } from '@/app/components/forms/inputs/input-field/input-field.component';
import { ContainerComponent } from '@/app/main/layouts/container/container.component';
import { Router } from '@angular/router';
import { EmployeeService } from '@/app/lib/services/employee/employee.service';
import { FormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-employee-edit',
  standalone: true,
  imports: [ContainerComponent,InputFieldComponent, 
    ButtonComponent,FormsModule,
MatInputModule],
  templateUrl: './employee-edit.component.html',
  styleUrl: './employee-edit.component.scss'
})
export class EmployeeEditComponent {
  constructor(
    private router: Router,
    private employeeService: EmployeeService
  ) {}

  employee = {};

  lastname: String = '';
  firstname: String = '';
  email: String = '';
  password: String = '1234';

  ngOnInit(): void {
    
    
    this.employeeService.getActivatedEmployees().subscribe((employees) => {
      this.employee = employees
    });
  }

  onSubmit() : void {
    const newEmployee = {
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      password : this.password
    };

    this.employeeService.editPatchEmployee(newEmployee).subscribe(
      response => {
       
        this.router.navigate(['/manager/employees-management/employees-list']);
      },
      error => {
        console.error('Erreur lors de mis a jour : ', error);
      }
    );
    
   
  }

}
