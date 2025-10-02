import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCategoryFormPage } from './product-category-form';

describe('ProductCategoryFormPage', () => {
  let component: ProductCategoryFormPage;
  let fixture: ComponentFixture<ProductCategoryFormPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCategoryFormPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCategoryFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
