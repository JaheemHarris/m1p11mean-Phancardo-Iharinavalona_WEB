import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ILinkType } from '../../../../lib/types/linkType';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  @Input() links: ILinkType[] = [];
}
