import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Produk } from './produk.component';

describe('Produk', () => {
  let component: Produk;
  let fixture: ComponentFixture<Produk>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Produk]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Produk);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
