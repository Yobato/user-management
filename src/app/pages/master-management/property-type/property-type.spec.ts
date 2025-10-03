import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyTypePage } from './property-type';

describe('PropertyTypePage', () => {
  let component: PropertyTypePage;
  let fixture: ComponentFixture<PropertyTypePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropertyTypePage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyTypePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
