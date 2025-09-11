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
        this.bindValidators(field.validations || [])
      );
      group.addControl(field.name, control);
    });
    return group;
  }

  private bindValidators(validations: ValidatorConfig[]): ValidatorFn[]{
    const angularValidators: ValidatorFn[] = [];
    validations.forEach(validator => {
      switch (validator.name) {
        case 'required': angularValidators.push(Validators.required); break;
        case 'email': angularValidators.push(Validators.email); break;
        case 'minLength': angularValidators.push(Validators.minLength(validator.value)); break;
        case 'maxLength': angularValidators.push(Validators.maxLength(validator.value)); break;
        case 'pattern': angularValidators.push(Validators.pattern(validator.value)); break;
      }
    });
    return angularValidators;
  }

}
