import { TestBed } from '@angular/core/testing';

import { MaritalStatusService } from './marital-status';

describe('MaritalStatusService', () => {
  let service: MaritalStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaritalStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
