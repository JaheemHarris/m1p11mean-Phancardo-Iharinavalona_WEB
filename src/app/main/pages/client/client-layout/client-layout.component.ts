import { Component } from '@angular/core';
import { SidebarComponent } from '../../../layouts/sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';
import { ILinkType } from '../../../../../lib/types/linkType';
import { HeaderComponent } from '../../../layouts/header/header.component';

@Component({
  selector: 'app-client-layout',
  standalone: true,
  imports: [SidebarComponent, HeaderComponent, RouterOutlet],
  templateUrl: './client-layout.component.html',
  styleUrl: './client-layout.component.scss',
})
export class ClientLayoutComponent {
  links: ILinkType[] = [
    { label: 'Example', href: 'example' },
    { label: 'Rendez-vous', href: 'appointement' },
    { label: 'Historique', href: 'history' },
    { label: 'Préférences', href: 'preferences' },
    { label: 'Rappel', href: '#' },
  ];
}
