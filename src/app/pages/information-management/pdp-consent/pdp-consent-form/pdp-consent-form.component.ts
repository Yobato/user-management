import { Component } from '@angular/core';
import { getPdpConsentForm } from '../pdp-consent.form';
import { DataItem, PdpConsentService } from '../../../../services/pdp-consent.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseFormComponent } from '../../../base-form.page';

@Component({
  selector: 'app-pdp-consent-form',
  standalone: false,
  templateUrl: './pdp-consent-form.component.html',
  styleUrl: './pdp-consent-form.component.css'
})
export class PdpConsentFormPage extends BaseFormComponent<DataItem, PdpConsentService> {

  formFactory = getPdpConsentForm;
  listPath = '/informasi/pdp-consent';

  constructor(
    router: Router,
    route: ActivatedRoute,
    pdpConsentService: PdpConsentService
  ){
    super(router, route, pdpConsentService)
  }
}
