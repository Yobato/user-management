import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup, Validators, ValidatorFn } from '@angular/forms';
import { FieldConfig, FormRow, ValidatorConfig } from './field.config';

@Injectable({
  providedIn: 'root'
})

export class DynamicFormService{
  constructor(private fb: FormBuilder){}

  public createFormGroup(config: FormRow[]): FormGroup{
    const group = this.fb.group({});

    config.forEach(row=>{
      row.fields.forEach(field => {
        const control = this.fb.control(
          {
            value: field.initialValue !== undefined ? field.initialValue : '',
            disabled: field.disabled === true
          },
          this.getValidators(field)
        );
        group.addControl(field.name, control);
      });
    })
    return group;
  }

  public getValidators(field: FieldConfig): ValidatorFn[]{
    const angularValidators: ValidatorFn[] = [];
    const validations = field.validations || [];
      validations.forEach(validator => {
      switch (validator.name) {
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
