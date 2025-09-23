import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FieldConfig, FormRow } from "./field.config";
import { AbstractControl, FormGroup} from "@angular/forms";
import { DynamicFormService } from "./dynamic-form.service";

import { Subscription } from "rxjs";

@Component({
  selector: 'app-dynamic-form',
  standalone: false,
  templateUrl: './dynamic-form.component.html',
})

export class DynamicFormComponent implements OnInit {
  @Input() config: FormRow[] = [];
  @Input() title: string = "";
  @Input() showSubmitButton: boolean = true;
  @Input() showCloseButton: boolean = false;
  @Output() formSubmit = new EventEmitter<any>();
  @Output() close = new EventEmitter<void>();

  form!: FormGroup;

  private subscriptions = new Subscription();

  constructor(private formService: DynamicFormService){}

  ngOnInit(): void {
      this.form = this.formService.createFormGroup(this.config);
      this.setupContionalFields();
      // this
  }

  private setupContionalFields(): void{
    this.config.forEach(row => {
      row.fields.forEach(field =>{
        if(field.showIf){
          const condition = field.showIf;
          const controlToWatch = this.form.get(condition.fieldName);
          const dependentControl = this.form.get(field.name);

          if(controlToWatch && dependentControl){
            this.toggleField(dependentControl, controlToWatch.value, condition, field);

            const sub = controlToWatch.valueChanges.subscribe(value => {
              this.toggleField(dependentControl, value, condition, field);
            });
            this.subscriptions.add(sub);
          }
        }
      });
    });
  }

  private toggleField(control: AbstractControl, value: any, condition: any, fieldConfig: FieldConfig){
    let shouldShow = false;
    if(condition.condition === 'equals'){
      shouldShow = (value === condition.value);
    } else if(condition.condition === 'notEquals'){
      shouldShow = (value !== condition.value);
    }
    if(shouldShow){
      const validators = this.formService.getValidators(fieldConfig);
      control.setValidators(validators);
    } else{
      control.clearValidators();
    }
    control.updateValueAndValidity();
  }

  public isVisible(field: FieldConfig): boolean{
    if(!field.showIf){
      return true;
    }
    const condition = field.showIf;
    const controlToWatch = this.form.get(condition.fieldName);

    if(!controlToWatch) return false;

    if(condition.condition === 'equals'){
      return controlToWatch.value === condition.value;
    } else if(condition.condition === 'notEquals'){
      return controlToWatch.value !== condition.value;
    }
    return true;
  }

  ngOnDestroy(): void{
    this.subscriptions.unsubscribe();
  }

  onSubmit(): void{
    if(this.form.valid){
      this.formSubmit.emit(this.form.value);
    } else{
      console.log("Form is invalid")
      this.form.markAllAsTouched();
    }
  }

  onCloseClick(): void{
    this.close.emit();
  }
}
