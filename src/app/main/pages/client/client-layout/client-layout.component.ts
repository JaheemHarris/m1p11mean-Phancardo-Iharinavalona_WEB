import { Component } from '@angular/core';
import { SidebarComponent } from '../../../layouts/sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';
import { ILinkType } from '../../../../../lib/types/linkType';

@Component({
  selector: 'app-client-layout',
  standalone: true,
  imports: [SidebarComponent, RouterOutlet],
  templateUrl: './client-layout.component.html',
  styleUrl: './client-layout.component.scss',
})
export class ClientLayoutComponent {
  links: ILinkType[] = [
    { label: 'Rendez-vous', href: 'appointement' },
    { label: 'Historique', href: 'history' },
    { label: 'Préférences', href: 'preferences' },
    { label: 'Rappel', href: '#' },
  ];
}
