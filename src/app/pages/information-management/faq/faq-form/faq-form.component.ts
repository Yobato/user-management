import { Component } from '@angular/core';
import { getFaqForm } from '../faq.form';
import { DataItem, FaqService } from '../../../../services/faq.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseFormComponent } from '../../../base-form.page';

@Component({
  selector: 'app-faq-form',
  standalone: false,
  templateUrl: './faq-form.component.html',
  styleUrl: './faq-form.component.css'
})
export class FaqFormPage extends BaseFormComponent<DataItem, FaqService> {

  formFactory = getFaqForm;
  listPath = '/informasi/faq';

  constructor(
    router: Router,
    route: ActivatedRoute,
    faqService: FaqService
  ){
    super(router, route, faqService)
  }
}
