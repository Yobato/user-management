import { TestBed } from '@angular/core/testing';

import { PromoService } from './promo.service';

describe('Promo', () => {
  let service: PromoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PromoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
