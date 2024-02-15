import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AvatarBoxComponent } from '../../../components/avatar-box/avatar-box.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, AvatarBoxComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isExpanded: boolean = false;
  avatar: any; // Assuming you have defined the avatar data structure
  translation: any; // Assuming you have defined the translation data structure

  toggleAccordion(): void {
    this.isExpanded = !this.isExpanded;
  }

  logout(): void {
    // Implement logout functionality here
  }
}
