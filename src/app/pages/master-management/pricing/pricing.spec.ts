import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingPage } from './pricing';

describe('PricingPage', () => {
  let component: PricingPage;
  let fixture: ComponentFixture<PricingPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PricingPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
