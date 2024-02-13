import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ctz-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() text: string = '';
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() disabled: boolean = false;
  @Input() variant: 'primary' | 'secondary' | 'neutral' = 'primary';
  @Input() className: string = '';
  @Output() onClick: EventEmitter<void> = new EventEmitter<void>();

  constructor() {
  }

  click = (): void => {
    this.onClick.emit();
  };
}
