import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdpConsentFormPage } from './pdp-consent-form.component';

describe('PdpConsentFormPage', () => {
  let component: PdpConsentFormPage;
  let fixture: ComponentFixture<PdpConsentFormPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PdpConsentFormPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PdpConsentFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
