import { Component } from '@angular/core';
import { BaseFormComponent } from '../../../base-form.page';
import { DataItem, MaritalStatusService } from '../../../../services/marital-status.service';
import { getMaritalStatusForm } from '../marital-status.form';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-marital-status-form',
  standalone: false,
  templateUrl: './marital-status-form.html',
  styleUrl: './marital-status-form.css'
})
export class MaritalStatusFormPage extends BaseFormComponent<DataItem, MaritalStatusService> {

  formFactory = getMaritalStatusForm;
  listPath = '/master/marital-status';

  constructor(
    router: Router,
    route: ActivatedRoute,
    maritalStatusService: MaritalStatusService
  ){
    super(router, route, maritalStatusService)
  }
}
