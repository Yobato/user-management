import { Component } from '@angular/core';
import { ArticlesService, DataItem } from '../../../services/articles.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseFormComponent } from '../../base-form.page';
import { getArticlesForm } from '../article.form';

@Component({
  selector: 'app-article-form',
  standalone: false,
  templateUrl: './article-form.component.html',
  styleUrl: './article-form.component.css'
})
export class ArticleFormPage extends BaseFormComponent<DataItem, ArticlesService> {

  formFactory = getArticlesForm;
  listPath = 'articles';

  constructor(
    router: Router,
    route: ActivatedRoute,
    articleService: ArticlesService
  ){
    super(router, route, articleService)
  }
}
