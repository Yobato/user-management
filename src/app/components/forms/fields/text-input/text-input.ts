
import { Component, forwardRef, Injector, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl, ReactiveFormsModule } from '@angular/forms';
import { ValidatorConfig } from '../../field.config';
import { AsteriskIcon, FileIcon, LucideAngularModule } from 'lucide-angular';


@Component({
  selector: 'app-text-input',
  standalone: false,
  templateUrl: './text-input.html',
  styleUrl: './text-input.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextInputComponent),
      multi: true
    }
  ]
})
export class TextInputComponent implements ControlValueAccessor, OnInit {
  readonly AsteriskIcon = AsteriskIcon;
  @Input() label: string = '';
  @Input() type: string = 'text';
  // @Input() required: boolean = false;
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
    // Lakukan pengecekan untuk memastikan target tidak null (meskipun di sini tidak akan pernah)
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
