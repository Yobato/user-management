import { Component } from '@angular/core';
import { TermsConditionService, DataItem } from '../../../../services/terms-condition.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseFormSingletonComponent } from '../../../base-form-singleton.page';
import { getTermsConditionFormConfig } from '../terms-condition.form'

@Component({
  selector: 'app-terms-condition-form',
  standalone: false,
  templateUrl: './terms-condition-form.html',
  styleUrl: './terms-condition-form.css'
})
export class TermsConditionFormPage extends BaseFormSingletonComponent<DataItem, TermsConditionService> {
  formFactory = getTermsConditionFormConfig;
  listPath = '/informasi/terms-condition';

  constructor(
    router: Router,
    route: ActivatedRoute,
    termsConditionService: TermsConditionService
  ) {
    super(router, route, termsConditionService);
  }
}
