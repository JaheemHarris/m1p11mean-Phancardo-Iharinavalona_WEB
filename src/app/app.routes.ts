import { Routes } from '@angular/router';
import { LoginComponent } from './main/pages/login/login.component';
import { ClientLayoutComponent } from './main/pages/client/client-layout/client-layout.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  {
    path: 'client',
    component: ClientLayoutComponent,
    children: [
      { path: 'appointement', component: LoginComponent },
      { path: 'history', component: LoginComponent },
      { path: 'preferences', component: LoginComponent },
    ],
  },
];
