import { Component } from '@angular/core';
import { FormViewModel, getArticlesForm } from '../article.form';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticlesService } from '../../../services/articles.service';

@Component({
  selector: 'app-tinjau',
  standalone: false,
  templateUrl: './tinjau.component.html',
  styleUrl: './tinjau.component.css'
})
export class TinjauArticlePage {
  vm: FormViewModel | null = null;
  isDataReady = false;

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticlesService,
    private router: Router
  ){}

  ngOnInit(): void{
    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      const articleData = this.articleService.getArticleById(+id);
      if(articleData){
        this.vm = getArticlesForm({mode: 'tinjau', data: articleData});
        this.isDataReady = true;
      } else {
        console.log("Artikel tidak ditemukan");
      }
    }
  }

  navigateBack(): void{
    this.router.navigate(['/articles']);
  }

  onArticleUpdate(formData: any){
    console.log("Data article berhasil diupdate:", formData);
  }
}
