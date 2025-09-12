import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup, Validators, ValidatorFn } from '@angular/forms';
import { FieldConfig, ValidatorConfig } from './field.config';

@Injectable({
  providedIn: 'root'
})

export class DynamicFormService{
  constructor(private fb: FormBuilder){}

  public createFormGroup(config: FieldConfig[]): FormGroup{
    const group = this.fb.group({});

    config.forEach(field => {
      const control = this.fb.control(
        field.initialValue !== undefined ? field.initialValue : '',
        this.bindValidators(field)
      );
      group.addControl(field.name, control);
    });
    return group;
  }

  private bindValidators(field: FieldConfig): ValidatorFn[]{
    const angularValidators: ValidatorFn[] = [];
    const validations = field.validations || [];
      validations.forEach(validator => {
      switch (validator.name) {
        // LOGIKA KECERDASAN ADA DI SINI
        case 'required':
          if (field.type === 'checkbox' || field.type === 'toggle') {
            angularValidators.push(Validators.requiredTrue);
          } else {
            angularValidators.push(Validators.required);
          }
          break;

        case 'requiredTrue':
          angularValidators.push(Validators.requiredTrue);
          break;

        case 'email': angularValidators.push(Validators.email); break;
        case 'minLength': angularValidators.push(Validators.minLength(validator.value)); break;

        case 'maxLength': angularValidators.push(Validators.maxLength(validator.value)); break;
        case 'pattern': angularValidators.push(Validators.pattern(validator.value)); break;
      }
    });
    return angularValidators;
  }

}
