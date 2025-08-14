import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableUntitled } from './table-untitled';

describe('TableUntitled', () => {
  let component: TableUntitled;
  let fixture: ComponentFixture<TableUntitled>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableUntitled]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableUntitled);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
