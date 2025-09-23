import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleFormPage } from './article-form.component';

describe('ArticleFormPage', () => {
  let component: ArticleFormPage;
  let fixture: ComponentFixture<ArticleFormPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleFormPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
