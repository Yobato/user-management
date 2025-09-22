import { Component, OnInit } from '@angular/core';
import { ArticlesService, DataItem } from '../../../services/articles.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormRow } from '../../../components/forms/field.config';
import { FormViewModel, getArticlesForm } from '../article.form';

@Component({
  selector: 'app-view',
  standalone: false,
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewArticlePage implements OnInit {
  vm: FormViewModel | null = null;
  isDataReady = false;

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticlesService,
    private router: Router
  ){}


  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      const articleData = this.articleService.getArticleById(+id);
      if(articleData){
          this.vm = getArticlesForm({mode: 'view', data: articleData});
          this.isDataReady = true;
        } else {
          console.log("Artikel tidak ditemukan");
        }
      }
  }

  navigateBack(): void{
    this.router.navigate(['/articles']);
  }

  onArticleUpdate(formData: any) {
    console.log('Data article berhasil diupdate:', formData);
  }
}
