import { Component, Input } from '@angular/core';

type ButtonVariant = 'primary' | 'secondary' | 'danger';
type ButtonSize = 'sm' | 'md' | 'lg';
type ActionType = 'view' | 'edit' | 'delete' | 'null' | 'document';

@Component({
  selector: 'app-button-table',
  standalone: false,
  templateUrl: './button-table.component.html',
  styleUrl: './button-table.component.css'
})
export class ButtonTable {
  @Input() variant: ButtonVariant = 'primary';
  @Input() size: ButtonSize = 'md';
  @Input() disabled: boolean = false;
  @Input() fullWidth: boolean = false;
  @Input() actionType: ActionType = 'null';
  @Input() routerLink: string | any[] | null = null;

  getIconForAction(type: ActionType) {
    switch (type) {
      case 'view':
        return 'visibility';
      case 'edit':
        return 'draw';
      case 'delete':
        return 'delete';
      case 'document':
        return 'assignment';
      default:
        return '';
    }
  }
}
