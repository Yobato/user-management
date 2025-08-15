import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonTable } from './button-table';

describe('ButtonTable', () => {
  let component: ButtonTable;
  let fixture: ComponentFixture<ButtonTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
