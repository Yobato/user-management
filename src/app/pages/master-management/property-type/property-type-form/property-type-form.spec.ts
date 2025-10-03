import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyTypeForm } from './property-type-form';

describe('PropertyTypeForm', () => {
  let component: PropertyTypeForm;
  let fixture: ComponentFixture<PropertyTypeForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropertyTypeForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyTypeForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
