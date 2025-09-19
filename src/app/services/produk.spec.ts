import { TestBed } from '@angular/core/testing';

import { Produk } from './produk.service';

describe('Produk', () => {
  let service: Produk;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Produk);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
