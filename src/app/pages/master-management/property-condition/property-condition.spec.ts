import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyCondition } from './property-condition';

describe('PropertyCondition', () => {
  let component: PropertyCondition;
  let fixture: ComponentFixture<PropertyCondition>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropertyCondition]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyCondition);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
