import { Component } from '@angular/core';
import { BaseFormComponent } from '../../../base-form.page';
import { DataItem, PropertyTypeService } from '../../../../services/property-type.service';
import { getPropertyTypeForm } from '../property-type.form';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-property-type-form',
  standalone: false,
  templateUrl: './property-type-form.html',
  styleUrl: './property-type-form.css'
})
export class PropertyTypeFormPage extends BaseFormComponent<DataItem, PropertyTypeService> {

  formFactory = getPropertyTypeForm;
  listPath = '/master/property-type';

  constructor(
    router: Router,
    route: ActivatedRoute,
    propertyTypeService: PropertyTypeService
  ){
    super(router, route, propertyTypeService)
  }
}
