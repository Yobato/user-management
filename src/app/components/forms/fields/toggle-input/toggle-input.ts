import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toggle-input',
  standalone: false,
  templateUrl: './toggle-input.html', // <-- Ubah
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => ToggleInputComponent), multi: true } // <-- Ubah
  ]
})
export class ToggleInputComponent implements ControlValueAccessor { // <-- Ubah
  @Input() label: string = '';
  @Input() note: string = '';

  value: boolean = false;
  disabled: boolean = false;
  onChange: (value: boolean) => void = () => {};
  onTouched: () => void = () => {};

  onToggleChange(event: Event): void {
    const checked = (event.target as HTMLInputElement).checked;
    this.onChange(checked);
  }

  writeValue(value: any): void { this.value = !!value; }
  registerOnChange(fn: any): void { this.onChange = fn; }
  registerOnTouched(fn: any): void { this.onTouched = fn; }
  setDisabledState?(isDisabled: boolean): void { this.disabled = isDisabled; }
}
