import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingForm } from './pricing-form';

describe('PricingForm', () => {
  let component: PricingForm;
  let fixture: ComponentFixture<PricingForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PricingForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricingForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
