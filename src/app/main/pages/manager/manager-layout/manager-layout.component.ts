import { HeaderComponent } from '@/app/main/layouts/header/header.component';
import { SidebarComponent } from '@/app/main/layouts/sidebar/sidebar.component';
import { ILinkType } from '@/lib/types/linkType';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-manager-layout',
  standalone: true,
  imports: [SidebarComponent, HeaderComponent, RouterOutlet],
  templateUrl: './manager-layout.component.html',
  styleUrl: './manager-layout.component.scss',
})
export class ManagerLayoutComponent {
  links: ILinkType[] = [
    { label: 'Example', href: 'example' },
    { label: 'Nouvel employé', href: 'employees-management/new-employee' },
    { label: 'Liste des employés', href: 'employees-management/employees-list' },
  ];
}
