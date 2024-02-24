import { ButtonComponent } from '@/app/components/buttons/button/button.component';
import { ContainerComponent } from '@/app/main/layouts/container/container.component';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-detail',
  standalone: true,
  imports: [ContainerComponent, ButtonComponent],
  templateUrl: './employee-detail.component.html',
  styleUrl: './employee-detail.component.scss',
})
export class EmployeeDetailComponent {
  constructor(private router: Router) {}

  onGoBack = () => {
    console.log('Go back to list');
    this.router.navigate(['/manager/employees-management/employees-list']);
  };
}
