import { Component } from '@angular/core';
import { MaleAvatarIconComponent } from '../icons/male-avatar-icon/male-avatar-icon.component';

@Component({
  selector: 'ctz-avatar-box',
  standalone: true,
  imports: [MaleAvatarIconComponent],
  templateUrl: './avatar-box.component.html',
  styleUrl: './avatar-box.component.scss'
})
export class AvatarBoxComponent {

}
