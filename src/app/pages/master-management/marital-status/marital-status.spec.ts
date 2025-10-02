import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaritalStatusPage } from './marital-status';

describe('MaritalStatusPage', () => {
  let component: MaritalStatusPage;
  let fixture: ComponentFixture<MaritalStatusPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaritalStatusPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaritalStatusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
