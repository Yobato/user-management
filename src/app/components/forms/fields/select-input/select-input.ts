
import { Component, forwardRef, Injector, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl, ReactiveFormsModule } from '@angular/forms';
import { Option, ValidatorConfig } from '../../field.config';
import { AsteriskIcon, FileIcon, LucideAngularModule } from 'lucide-angular';


@Component({
  selector: 'app-select-input',
  standalone: false,
  templateUrl: './select-input.html',
  styleUrl: './select-input.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectInputComponent),
      multi: true
    }
  ]
})
export class SelectInputComponent implements ControlValueAccessor, OnInit {
  readonly AsteriskIcon = AsteriskIcon;
  @Input() label: string = '';
  @Input() options: Option[] = [];
  @Input() validations: ValidatorConfig[] = [];

  public ngControl!: NgControl;
  value: string | number | null = null;
  disabled: boolean = false;

  isRequired(): boolean {
    return this.validations.some(v => v.name === 'required');
  }

  constructor(private injector: Injector){}
  ngOnInit(): void {
    this.ngControl = this.injector.get(NgControl);
  }

  onChange: (value: string) => void = () => {};
  onSelectChange(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    if (value) {
      this.onChange(value);
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
