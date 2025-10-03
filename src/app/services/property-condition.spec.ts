import { TestBed } from '@angular/core/testing';

import { PropertyConditionService } from './property-condition.service';

describe('PropertyConditionService', () => {
  let service: PropertyConditionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PropertyConditionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
