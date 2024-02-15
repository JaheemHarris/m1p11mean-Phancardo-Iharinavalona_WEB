import { Component } from '@angular/core';
import { ContainerComponent } from '../../layouts/container/container.component';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [ContainerComponent],
  templateUrl: './example.component.html',
  styleUrl: './example.component.scss'
})
export class ExampleComponent {

}
