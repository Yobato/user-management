import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextareaInput } from './textarea-input';

describe('TextareaInput', () => {
  let component: TextareaInput;
  let fixture: ComponentFixture<TextareaInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextareaInput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextareaInput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
