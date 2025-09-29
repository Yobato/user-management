import { Component } from '@angular/core';
import { AboutUsService, DataItem } from '../../../../services/about-us.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseFormSingletonComponent } from '../../../base-form-singleton.page';
import { getAboutUsFormConfig } from '../about-us.form';

@Component({
  selector: 'app-about-us-form',
  standalone: false,
  templateUrl: './about-us-form.component.html',
  styleUrl: './about-us-form.component.css'
})
export class AboutUsFormPage extends BaseFormSingletonComponent<DataItem, AboutUsService> {
  formFactory = getAboutUsFormConfig;
  listPath = '/informasi/about-us';

  constructor(
    router: Router,
    route: ActivatedRoute,
    aboutUsService: AboutUsService
  ) {
    super(router, route, aboutUsService);
  }



}
