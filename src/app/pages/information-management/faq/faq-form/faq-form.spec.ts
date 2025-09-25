import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqForm } from './faq-form';

describe('FaqForm', () => {
  let component: FaqForm;
  let fixture: ComponentFixture<FaqForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaqForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaqForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
