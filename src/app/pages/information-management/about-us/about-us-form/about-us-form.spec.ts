import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsForm } from './about-us-form';

describe('AboutUsForm', () => {
  let component: AboutUsForm;
  let fixture: ComponentFixture<AboutUsForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutUsForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutUsForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
