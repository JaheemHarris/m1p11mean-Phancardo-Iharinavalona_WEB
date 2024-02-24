import { ButtonComponent } from '@/app/components/buttons/button/button.component';
import { InputFieldComponent } from '@/app/components/forms/inputs/input-field/input-field.component';
import { ContainerComponent } from '@/app/main/layouts/container/container.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-new-employee',
  standalone: true,
  imports: [ContainerComponent, InputFieldComponent, ButtonComponent],
  templateUrl: './new-employee.component.html',
  styleUrl: './new-employee.component.scss',
})
export class NewEmployeeComponent {}
