import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxInput } from './checkbox-input';

describe('CheckboxInput', () => {
  let component: CheckboxInput;
  let fixture: ComponentFixture<CheckboxInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckboxInput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckboxInput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
