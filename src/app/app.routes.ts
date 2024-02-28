import { Routes } from '@angular/router';
import { LoginComponent } from './main/pages/login/login.component';
import { ClientLayoutComponent } from './main/pages/client/client-layout/client-layout.component';
import { ExampleComponent } from './main/pages/example/example.component';
import { EmployeeLayoutComponent } from './main/pages/employee/employee-layout/employee-layout.component';
import { ManagerLayoutComponent } from './main/pages/manager/manager-layout/manager-layout.component';
import { NewEmployeeComponent } from './main/pages/manager/employees-management/new-employee/new-employee.component';
import { EmployeesListComponent } from './main/pages/manager/employees-management/employees-list/employees-list.component';
import { EmployeeDetailComponent } from './main/pages/manager/employees-management/employee-detail/employee-detail.component';
import { EmployeeScheduleComponent } from './main/pages/employee/employee-schedule/employee-schedule.component';
import { RegisterComponent } from './main/pages/register/register.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'client',
    component: ClientLayoutComponent,
    children: [
      { path: 'example', component: ExampleComponent },
      { path: 'appointement', component: LoginComponent },
      { path: 'history', component: LoginComponent },
      { path: 'preferences', component: LoginComponent },
    ],
  },
  {
    path: 'employee',
    component: EmployeeLayoutComponent,
    children: [{ path: 'schedule', component: EmployeeScheduleComponent }],
  },
  {
    path: 'manager',
    component: ManagerLayoutComponent,
    children: [
      {
        path: 'employees-management/employee-detail/:id',
        component: EmployeeDetailComponent,
      },
      {
        path: 'employees-management/employees-list',
        component: EmployeesListComponent,
      },
      {
        path: 'employees-management/new-employee',
        component: NewEmployeeComponent,
      },
    ],
  },
];
