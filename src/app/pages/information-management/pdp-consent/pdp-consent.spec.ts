import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdpConsent } from './pdp-consent';

describe('PdpConsent', () => {
  let component: PdpConsent;
  let fixture: ComponentFixture<PdpConsent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PdpConsent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PdpConsent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
