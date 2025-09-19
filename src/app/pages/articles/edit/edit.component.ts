import { Component, OnInit } from '@angular/core';
import { FormRow } from '../../../components/forms/field.config';
import { ActivatedRoute } from '@angular/router';
import { ArticlesService, DataItem } from '../../../services/articles.service';

@Component({
  selector: 'app-edit',
  standalone: false,
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditArticlePage implements OnInit {
  articleId: string | null = null;
  articleData: DataItem | undefined;

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticlesService
  ){}

  isDataReady = false;
  public articleForm: FormRow[] = [
    {
      fields: [
        {
          type: 'text',
          name: 'judul',
          label: 'Judul Article',
          placeholder: 'Masukkan judul article',
          validations: [
            { name: 'required', message: 'Nama Lengkap wajib diisi.' },
            { name: 'minLength', value: 3, message: 'Nama harus lebih dari 2 karakter.' }
          ],
        },
      ]
    },
    {
      fields: [
        {
          type: 'textarea',
          name: 'deskripsi',
          label: 'Deskripsi Article',
          rows: 4,
          placeholder: "Masukkan deskripsi article Anda",
          validations: [
              { name: 'required', message: 'Deskripsi wajib diisi.' },
          ]
        }
      ]
    },

    {
      fields: [
        {
          type: 'text',
          name: 'refrensi',
          label: 'Refrensi Article',
          placeholder: 'Masukkan link refrensi article',
          validations: [
            { name: 'required', message: 'Refrensi Artikel wajib diisi.' },
            { name: 'minLength', value: 5, message: 'Link minimal 5 karakter.' }
          ],
        },
      ]
    },

    {
      fields: [
        {
          type: 'file',
          name: 'artikel_image', // Nama harus unik
          label: 'Gambar Artikel',
          validations: [
            { name: 'required', message: 'Gambar harus diisi.' }
          ],
          accept: 'image/*',
          note: 'Maksimum ukuran file 2MB.'
        },
      ]
    },
    {
      fields: [
        {
          type: 'select',
          name: 'kategori',
          label: 'Kategori Produk',
          options: [
            { value: 'reguler', label: 'BSI Griya Reguler' },
            { value: 'simuda', label: 'BSI Griya Srimuda' },
            { value: 'haji', label: 'BSI Griya Haji' }
          ],
          // initialValue: "simuda",
          validations: [
            { name: 'required', message: 'Peran wajib dipilih.' }
          ]
        },
      ]
    },

    {
      fields: [
        {
          type: 'toggle',
          name: 'status_approval',
          label: 'Is active',
        },
      ]
    },
  ];

  ngOnInit(): void {
    this.articleId = this.route.snapshot.paramMap.get('id');

    if(this.articleId){
      this.articleData = this.articleService.getArticleById(+this.articleId);

      if(this.articleData){
        this.prepareFormConfig();
        this.isDataReady = true;
      } else{
        console.log("Artikel tidak ditemukan");
      }
    }
  }

  prepareFormConfig(): void{
    this.articleForm.forEach(row => {
      row.fields.forEach(field => {
        if(this.articleData && field.name in this.articleData){
          field.initialValue = this.articleData[field.name as keyof DataItem]
        }
      });
    });
  }

  onArticleUpdate(formData: any) {
    console.log('Data article berhasil diupdate:', formData);
  }

}
