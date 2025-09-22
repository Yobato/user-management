import { Component, OnInit } from '@angular/core';
import { FormRow } from '../../../components/forms/field.config';
import { ArticlesService } from '../../../services/articles.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormViewModel, getArticlesForm } from '../article.form';

@Component({
  selector: 'app-create',
  standalone: false,
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateArticlePage implements OnInit {
  vm: FormViewModel | null = null;

  constructor(
    // === Untuk fungsi create article nanti ===
    private articleService: ArticlesService,
    private route: ActivatedRoute,
    private router: Router
  ){ }

  ngOnInit(): void {
    this.vm = getArticlesForm({mode: 'create'});
  }

  onSubmit(formData: any): void {
    console.log('Data baru yang akan disimpan:', formData);
    alert('Artikel baru berhasil dibuat!');
    this.router.navigate(['/articles']);
  }

  navigateBack(): void{
    this.router.navigate(['/articles']);
  }

}
