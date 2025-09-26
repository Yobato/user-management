import { TestBed } from '@angular/core/testing';

import { PdpConsent } from './pdp-consent';

describe('PdpConsent', () => {
  let service: PdpConsent;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PdpConsent);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
