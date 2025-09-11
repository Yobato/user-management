import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarInput } from './calendar-input';

describe('CalendarInput', () => {
  let component: CalendarInput;
  let fixture: ComponentFixture<CalendarInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalendarInput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendarInput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
