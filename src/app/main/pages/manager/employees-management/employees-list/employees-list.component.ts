import { ContainerComponent } from '@/app/main/layouts/container/container.component';
import {
  MatPaginator,
  MatPaginatorIntl,
  MatPaginatorModule,
} from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { IEmployee } from '@/lib/types/employeeType';
import { Router } from '@angular/router';
import { EmployeeService } from '@/app/lib/services/employee/employee.service';
import { MatButtonModule } from '@angular/material/button';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { error } from 'console';

@Component({
  selector: 'app-employees-list',
  standalone: true,
  imports: [
    ContainerComponent,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    NgxSpinnerModule,
  ],
  templateUrl: './employees-list.component.html',
  styleUrl: './employees-list.component.scss',
})
export class EmployeesListComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = [
    'firstname',
    'lastname',
    'email',
    'view',
    'edit',
    'delete',
  ];

  employees = new MatTableDataSource<IEmployee>([]);

  constructor(
    private router: Router,
    private employeeService: EmployeeService,
    private spinner: NgxSpinnerService
  ) {}

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.spinner.show();
    this.employeeService.getActivatedEmployees().subscribe({
      next: ({ result, success }) => {
        if (success && result) {
          this.employees.data = result;
          this.spinner.hide();
        }
      },
      error: (error) => {
        this.spinner.hide();
        console.error(error);
      },
    });
  }

  ngAfterViewInit() {
    this.employees.paginator = this.paginator;
    this.employees.paginator._intl = new MatPaginatorIntl();
    this.employees.paginator._intl.itemsPerPageLabel = `Nombre d'éléments par page`;
  }

  onView = (_id: string): void => {
    this.router.navigate([
      `/manager/employees-management/employee-detail/${_id}`,
    ]);
  };

  onEdit = (_id: number): void => {
    this.router.navigate([
      `/manager/employees-management/employee-edit/${_id}`,
    ]);
  };

  onDelete = (_id: string): void => {
    this.spinner.show();
    this.employeeService.deleteEmployee(_id).subscribe({
      next: ({ status, success }) => {
        if (status === 200 && success) {
          this.employeeService.getActivatedEmployees().subscribe({
            next: ({ result, success }) => {
              if (success && result) {
                this.employees.data = result;
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
      },
      error: (error) => {
        this.spinner.hide();
        console.error(error);
      },
    });
  };
}
