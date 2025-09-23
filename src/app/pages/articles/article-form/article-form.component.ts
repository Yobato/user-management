import { Component, OnInit } from '@angular/core';
import { FormMode, FormViewModel, getArticlesForm } from '../article.form';
import { ArticlesService, DataItem } from '../../../services/articles.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-article-form',
  standalone: false,
  templateUrl: './article-form.component.html',
  styleUrl: './article-form.component.css'
})
export class ArticleFormPage implements OnInit {

  public vm: FormViewModel | null = null;
  public isDataReady = false;

  private mode: FormMode = 'create';
  private id: string | null = null;
  private articleData: DataItem | undefined;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private articleService: ArticlesService
  ){}

  ngOnInit(): void {
      this.mode = this.route.snapshot.data['mode'] as FormMode;
      this.id = this.route.snapshot.paramMap.get('id');

      this.loadDataAndBuildForm();
  }

  private loadDataAndBuildForm(): void{
    if(this.id){
      this.articleData = this.articleService.getArticleById(+this.id);
      if(!this.articleData){
        console.error('Artikel tidak ditemukan!');
        // Arahkan ke halaman 404
        return;
      }
    }

    this.vm = getArticlesForm({mode: this.mode, data: this.articleData});
    this.isDataReady = true;
  }

  onSubmit(formData: any): void{
    console.log('Form disubmit dengan mode:', this.mode, formData);

    if(this.mode === 'create'){
      // this.articleService.createArticle(formData);
      alert('Artikel baru berhasil dibuat!');
    } else if(this.mode === 'edit' || this.mode === 'tinjau'){
      if(this.id){
        // this.articleService.updateArticle(+this.id, formData);
        alert(`Artikel dengan ID ${this.id} berhasil diupdate!`);
      }
    }

    this.router.navigate(['/articles']);
  }

  onClose(): void {
    this.router.navigate(['/articles']);
  }

}
