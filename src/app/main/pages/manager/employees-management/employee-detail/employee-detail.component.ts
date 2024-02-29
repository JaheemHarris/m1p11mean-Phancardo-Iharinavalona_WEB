import { ButtonComponent } from '@/app/components/buttons/button/button.component';
import { ContainerComponent } from '@/app/main/layouts/container/container.component';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from '@/app/lib/services/employee/employee.service';
import { IEmployee } from '@/lib/types/employeeType';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-employee-detail',
  standalone: true,
  imports: [ContainerComponent, ButtonComponent, NgxSpinnerModule],
  templateUrl: './employee-detail.component.html',
  styleUrl: './employee-detail.component.scss',
})
export class EmployeeDetailComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private spinner: NgxSpinnerService
  ) {}

  employee: IEmployee = {
    _id: 0,
    lastname: '',
    firstname: '',
    email: '',
  };

  ngOnInit(): void {
    this.spinner.show();
    let id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.employeeService.getEmployeeById(id).subscribe({
        next: ({ success, result }) => {
          if (result && success) {
            this.employee = result;
            this.spinner.hide();
          } else {
            this.spinner.hide();
          }
        },
        error: (error) => {
          this.spinner.hide();
          console.error(error);
        },
      });
    } else {
      this.spinner.hide();
    }
  }
  onGoBack = () => {
    this.router.navigate(['/manager/employees-management/employees-list']);
  };
}
