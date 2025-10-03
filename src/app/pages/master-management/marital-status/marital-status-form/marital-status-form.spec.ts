import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaritalStatusFormPage } from './marital-status-form';

describe('MaritalStatusFormPage', () => {
  let component: MaritalStatusFormPage;
  let fixture: ComponentFixture<MaritalStatusFormPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaritalStatusFormPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaritalStatusFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
