import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ctz-input-field',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.scss',
})
export class InputFieldComponent {
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() name: string = '';
  @Input() type: 'text' | 'password' | 'email' = 'text';
  @Input() error: boolean = false;
  @Input() errorText: string = '';
  @Input() help: boolean = false;
  @Input() helpText: string = '';

  @Output() onChange: EventEmitter<void> = new EventEmitter<void>();
}
