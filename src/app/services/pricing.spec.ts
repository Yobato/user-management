import { TestBed } from '@angular/core/testing';

import { Pricing } from './pricing';

describe('Pricing', () => {
  let service: Pricing;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Pricing);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
