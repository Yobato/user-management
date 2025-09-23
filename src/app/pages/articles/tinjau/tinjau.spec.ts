import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tinjau } from './tinjau';

describe('Tinjau', () => {
  let component: Tinjau;
  let fixture: ComponentFixture<Tinjau>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tinjau]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tinjau);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
