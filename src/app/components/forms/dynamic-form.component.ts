import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FieldConfig } from "./field.config";
import { FormGroup, ReactiveFormsModule } from "@angular/forms";
import { DynamicFormService } from "./dynamic-form.service";

import { TextInputComponent } from "./fields/text-input/text-input";
import { TextAreaInputComponent } from "./fields/textarea-input/textarea-input";
import { SelectInputComponent } from "./fields/select-input/select-input";
import { CalendarInputComponent } from "./fields/calendar-input/calendar-input";

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  imports: [ReactiveFormsModule, TextInputComponent, TextAreaInputComponent, SelectInputComponent, CalendarInputComponent],
})

export class DynamicFormComponent implements OnInit {
  @Input() config: FieldConfig[] = [];
  @Output() formSubmit = new EventEmitter<any>();

  form!: FormGroup;

  constructor(private formService: DynamicFormService){}

  ngOnInit(): void {
      this.form = this.formService.createFormGroup(this.config);
  }

  onSubmit(): void{
    if(this.form.valid){
      this.formSubmit.emit(this.form.value);
    } else{
      console.log("Form is invalid")
      this.form.markAllAsTouched();
    }
  }

}
