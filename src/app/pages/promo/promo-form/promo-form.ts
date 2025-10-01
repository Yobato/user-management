import { Component } from '@angular/core';
import { PromoService, DataItem } from '../../../services/promo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseFormComponent } from '../../base-form.page';
import { getPromoForm } from '../promo.form';

@Component({
  selector: 'app-promo-form',
  standalone: false,
  templateUrl: './promo-form.html',
  styleUrl: './promo-form.css'
})
export class PromoFormPage extends BaseFormComponent<DataItem, PromoService> {
  
  formFactory = getPromoForm;
  listPath = 'promo';

  constructor(
    router: Router,
    route: ActivatedRoute,
    promoService: PromoService
  ){
    super(router, route, promoService)
  }
}
