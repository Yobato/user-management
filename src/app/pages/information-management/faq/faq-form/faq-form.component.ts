import { Component } from '@angular/core';
import { FormMode, FormViewModel, getFaqForm } from '../faq.form';
import { DataItem, FaqService } from '../../../../services/faq.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-faq-form',
  standalone: false,
  templateUrl: './faq-form.component.html',
  styleUrl: './faq-form.component.css'
})
export class FaqFormPage {

  public vm: FormViewModel | null = null;
  public isDataReady = false;

  private mode: FormMode = 'create';
  private id: string | null = null;
  private faqData: DataItem | undefined;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private faqService: FaqService
  ){}

  ngOnInit(): void{
    this.mode = this.route.snapshot.data['mode'] as FormMode;
    this.id = this.route.snapshot.paramMap.get('id');
    this.loadDataAndBuildForm();
  }

  private loadDataAndBuildForm(): void{
    if(this.id){
      this.faqData = this.faqService.getFaqById(+this.id);
      if(!this.faqData){
        console.log('Artikel tidak ditemukan');
        return;
      }
    }
    this.vm = getFaqForm({mode: this.mode, data: this.faqData});
    this. isDataReady = true
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

    this.router.navigate(['/informasi/faq']);
  }

  onClose(): void {
  this.router.navigate(['/informasi/faq']);
  }

}
