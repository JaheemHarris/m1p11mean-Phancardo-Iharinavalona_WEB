import { ContainerComponent } from '@/app/main/layouts/container/container.component';
import {
  MatPaginator,
  MatPaginatorIntl,
  MatPaginatorModule,
} from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { IEmployee } from '@/lib/types/employeeType';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees-list',
  standalone: true,
  imports: [ContainerComponent, MatTableModule, MatPaginatorModule],
  templateUrl: './employees-list.component.html',
  styleUrl: './employees-list.component.scss',
})
export class EmployeesListComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'firstname',
    'lastname',
    'email',
    'view',
    'delete',
  ];
  dataSource = new MatTableDataSource<IEmployee>([
    {
      _id: 3435353,
      firstname: 'Jaheem',
      lastname: 'Harris',
      email: 'jaheemharris@gmail.com',
    },
    {
      _id: 45141989,
      firstname: 'Ola',
      lastname: 'Dad',
      email: 'oladad@gmail.com',
    },
    {
      _id: 4189789,
      firstname: 'Phan',
      lastname: 'Cardo',
      email: 'phancardo@gmail.com',
    },
    {
      _id: 7889289,
      firstname: 'Jimmy',
      lastname: 'Tony',
      email: 'jimmytony@gmail.com',
    },
    {
      _id: 365999,
      firstname: 'Naval',
      lastname: 'Harris',
      email: 'navalharris@gmail.com',
    },
  ]);

  constructor(private router: Router) {}

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.paginator._intl = new MatPaginatorIntl();
    this.dataSource.paginator._intl.itemsPerPageLabel = `Nombre d'éléments par page`;
  }

  onView = (_id: number): void => {
    this.router.navigate([
      `/manager/employees-management/employee-detail/${_id}`,
    ]);
  };

  onDelete = (_id: number): void => {
    this.router.navigate([
      `/manager/employees-management/employee-detail/${_id}`,
    ]);
  };
}
