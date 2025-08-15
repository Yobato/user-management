import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTable } from './search-table';

describe('SearchTable', () => {
  let component: SearchTable;
  let fixture: ComponentFixture<SearchTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
