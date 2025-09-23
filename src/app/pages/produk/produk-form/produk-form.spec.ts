import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdukFormPage } from './produk-form.component';

describe('ProdukFormPage', () => {
  let component: ProdukFormPage;
  let fixture: ComponentFixture<ProdukFormPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdukFormPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdukFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
