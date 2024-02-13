import { Component } from '@angular/core';
import { InputFieldComponent } from '../../../components/forms/inputs/input-field/input-field.component';
import { ButtonComponent } from '../../../components/buttons/button/button.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [InputFieldComponent, ButtonComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
