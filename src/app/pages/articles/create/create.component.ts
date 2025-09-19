import { Component } from '@angular/core';
import { FormRow } from '../../../components/forms/field.config';

@Component({
  selector: 'app-create',
  standalone: false,
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateArticlePage {
  public profileFormConfig: FormRow[] = [
    {
      fields: [
        {
          type: 'text',
          name: 'titleArticle',
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
          name: 'description_article',
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
          name: 'refrenceArticle',
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
          name: 'profilePicture', // Nama harus unik
          label: 'Foto Profil',
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
          name: 'categoryProduct',
          label: 'Kategori Produk',
          initialValue: null,
          options: [
            { value: 'reguler', label: 'BSI Griya Reguler' },
            { value: 'srimuda', label: 'BSI Griya Srimuda' },
            { value: 'haji', label: 'BSI Griya Haji' }
          ],
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
          name: 'isActive',
          label: 'Is active',
        },
      ]
    },
  ];

  onProfileUpdate(formData: any) {
    console.log('Data article berhasil diupdate:', formData);
  }

}
