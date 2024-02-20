import { HeaderComponent } from '@/app/main/layouts/header/header.component';
import { SidebarComponent } from '@/app/main/layouts/sidebar/sidebar.component';
import { ILinkType } from '@/lib/types/linkType';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-employee-layout',
  standalone: true,
  imports: [SidebarComponent, HeaderComponent, RouterOutlet],
  templateUrl: './employee-layout.component.html',
  styleUrl: './employee-layout.component.scss',
})
export class EmployeeLayoutComponent {
  links: ILinkType[] = [
    { label: 'Example', href: 'example' },
    { label: 'Rendez-vous', href: 'appointement' },
    { label: 'Historique', href: 'history' },
    { label: 'Préférences', href: 'preferences' },
    { label: 'Rappel', href: '#' },
  ];
}
