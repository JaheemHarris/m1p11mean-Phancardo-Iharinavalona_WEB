import { Component } from '@angular/core';
import { SidebarComponent } from '../../../layouts/sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-client-layout',
  standalone: true,
  imports: [SidebarComponent, RouterOutlet],
  templateUrl: './client-layout.component.html',
  styleUrl: './client-layout.component.scss',
})
export class ClientLayoutComponent {
  links: string[] = ['Rendez-vous', 'Historique', 'Préférences', 'Rappel'];
}
