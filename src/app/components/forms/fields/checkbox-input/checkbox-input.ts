
import { Component, forwardRef, Injector, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl, ReactiveFormsModule } from '@angular/forms';
import { ValidatorConfig } from '../../field.config';
import { AsteriskIcon, FileIcon, LucideAngularModule } from 'lucide-angular';


@Component({
  selector: 'app-checkbox-input',
  standalone: true,
  imports: [ReactiveFormsModule, LucideAngularModule],
  templateUrl: './checkbox-input.html',
  styleUrl: './checkbox-input.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxInputComponent),
      multi: true
    }
  ]
})
export class CheckboxInputComponent implements ControlValueAccessor, OnInit {
  readonly AsteriskIcon = AsteriskIcon;
  @Input() label: string = '';
  @Input() validations: ValidatorConfig[] = [];

  public ngControl!: NgControl;
  value: boolean = false;
  disabled: boolean = false;

  isRequired(): boolean {
    return this.validations.some(v => v.name === 'required');
  }

  constructor(private injector: Injector){}
  ngOnInit(): void {
    this.ngControl = this.injector.get(NgControl);
  }

  // --- BoilerPlate ControlValueAccessor ---
  onChange: (value: boolean) => void = () => {};
  onCheckboxChange(event: Event): void {
    const checkboxElement = event.target as HTMLInputElement;
    // Lakukan pengecekan untuk memastikan target tidak null (meskipun di sini tidak akan pernah)
    if (checkboxElement) {
      this.onChange(checkboxElement.checked);
    }
  }
  onTouched: () => void = () => {};

  writeValue(value: any): void {
      this.value = !!value;
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
