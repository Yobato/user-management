import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsPage } from './about-us/about-us.component';
import { AboutUsFormPage } from './about-us/about-us-form/about-us-form.component';
import { FaqPage } from './faq/faq.component';
import { FaqFormPage } from './faq/faq-form/faq-form.component';
import { PdpConsentPage } from './pdp-consent/pdp-consent.component';
import { PdpConsentFormPage } from './pdp-consent/pdp-consent-form/pdp-consent-form.component';
import { TermsConditionPage } from './terms-condition/terms-condition';

const routes: Routes = [
  // About Us
  {
    path: 'about-us',
    component: AboutUsPage
  },
  {
    path: 'about-us/edit',
    component: AboutUsFormPage,
    data: { mode: 'edit' }
  },
  {
    path: 'about-us/view',
    component: AboutUsFormPage,
    data: { mode: 'view' }
  },
  {
    path: 'about-us/tinjau',
    component: AboutUsFormPage,
    data: { mode: 'review' }
  },

  // FAQ
  {
    path: 'faq',
    component: FaqPage
  },
  {
    path: 'faq/create',
    component: FaqFormPage,
    data: { mode: 'create' }
  },
  {
    path: 'faq/edit/:id',
    component: FaqFormPage,
    data: { mode: 'edit' }
  },
  {
    path: 'faq/view/:id',
    component: FaqFormPage,
    data: { mode: 'view' }
  },
  {
    path: 'faq/tinjau/:id',
    component: FaqFormPage,
    data: { mode: 'tinjau' }
  },

  // PDP-Consent
  {
    path: 'pdp-consent',
    component: PdpConsentPage
  },
  {
    path: 'pdp-consent/create',
    component: PdpConsentFormPage,
    data: { mode: 'create' }
  },
  {
    path: 'pdp-consent/edit/:id',
    component: PdpConsentFormPage,
    data: { mode: 'edit' }
  },
  {
    path: 'pdp-consent/view/:id',
    component: PdpConsentFormPage,
    data: { mode: 'view' }
  },
  {
    path: 'pdp-consent/tinjau/:id',
    component: PdpConsentFormPage,
    data: { mode: 'tinjau' }
  },

  // Terms and Condition
  {
    path: 'terms-condition',
    component: TermsConditionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InformationManagementRoutingModule { }
