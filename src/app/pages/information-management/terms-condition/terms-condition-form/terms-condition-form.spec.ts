import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsConditionForm } from './terms-condition-form';

describe('TermsConditionForm', () => {
  let component: TermsConditionForm;
  let fixture: ComponentFixture<TermsConditionForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TermsConditionForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TermsConditionForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
