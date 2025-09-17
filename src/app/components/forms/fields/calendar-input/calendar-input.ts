
import { Component, forwardRef, Injector, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl, ReactiveFormsModule } from '@angular/forms';
import { ValidatorConfig } from '../../field.config';
import { AsteriskIcon, FileIcon, LucideAngularModule } from 'lucide-angular';


@Component({
  selector: 'app-calendar-input',
  standalone: false,
  templateUrl: './calendar-input.html',
  styleUrl: './calendar-input.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CalendarInputComponent),
      multi: true
    }
  ]
})
export class CalendarInputComponent implements ControlValueAccessor, OnInit {
  readonly AsteriskIcon = AsteriskIcon;
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() validations: ValidatorConfig[] = [];

  public ngControl!: NgControl;
  value: string = '';
  disabled: boolean = false;

  isRequired(): boolean {
    return this.validations.some(v => v.name === 'required');
  }

  constructor(private injector: Injector){}

  ngOnInit(): void {
    this.ngControl = this.injector.get(NgControl);
  }

  // --- BoilerPlate ControlValueAccessor ---
  onChange: (value: string) => void = () => {};
  onInputChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement) {
      this.onChange(inputElement.value);
    }
  }
  onTouched: () => void = () => {};

  writeValue(value: any): void {
      this.value = value;
  }

  registerOnChange(fn: any): void {
      this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
      this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
      this.disabled = isDisabled;
  }
}
