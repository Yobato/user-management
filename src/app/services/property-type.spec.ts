import { TestBed } from '@angular/core/testing';

import { PropertyType } from './property-type';

describe('PropertyType', () => {
  let service: PropertyType;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PropertyType);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
