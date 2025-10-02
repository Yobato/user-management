import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingFormPage } from './pricing-form';

describe('PricingFormPage', () => {
  let component: PricingFormPage;
  let fixture: ComponentFixture<PricingFormPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PricingFormPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricingFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
