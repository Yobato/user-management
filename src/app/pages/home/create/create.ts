import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldConfig, FormRow } from '../../../components/forms/field.config';
import { DynamicFormComponent } from '../../../components/forms/dynamic-form.component';
import { BreadcrumsComponent } from '../../../components/breadcrums/breadcrums.component';

@Component({
  selector: 'app-profile-settings',
  standalone: true,
  imports: [CommonModule, DynamicFormComponent, BreadcrumsComponent],
  templateUrl: "./create.html"
})
export class CreatePage {

  public profileFormConfig: FormRow[] = [
  // BARIS 1: Dua Kolom (Nama Lengkap & Email)
  {
    fields: [
      {
        type: 'display',
        name: 'reviewResultSection', // name tetap dibutuhkan untuk 'track by'
        label: '',
        renderType: 'status-section',
        data: {
          title: 'Hasil Review',
          statusLabel: 'Status',
          statusValue: 'Sendback',
          reasonLabel: 'Reason',
          reasonValue: 'Mohon lengkapi bagian deskripsi dan unggah gambar sampul dengan resolusi yang lebih tinggi.'
        }
      }
    ]
  },
  // {
  //   fields: [{
  //     type: 'display',
  //     renderType: 'subtitle',
  //     label: '',
  //     name: 'personalDataSubtitle',
  //     data: {
  //       text: 'Detail Informasi Pribadi'
  //     }
  //   }]
  // },
  {
    fields: [
      {
        type: 'text',
        name: 'titleArticle',
        label: 'Judul Article',
        placeholder: 'Masukkan judul article',
        // initialValue: 'Budi Santoso',
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
        placeholder: "Masukka deskripsi article Anda",
        validations: [
            { name: 'required', message: 'Deskripsi wajib diisi.' },
        ]
      }
    ]
  },

  // BARIS 3: Dua Kolom (Peran & Tanggal)
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
      // {
      //   type: 'select',
      //   name: 'userRole',
      //   label: 'Peran Pengguna',
      //   options: [
      //     { value: 'admin', label: 'Administrator' },
      //     { value: 'editor', label: 'Editor Konten' },
      //     { value: 'viewer', label: 'Hanya Lihat' }
      //   ],
      //   validations: [
      //     { name: 'required', message: 'Peran wajib dipilih.' }
      //   ]
      // },
      // {
      //   type: 'date',
      //   name: 'publicationDate',
      //   label: 'Tanggal Publikasi',
      //   validations: [
      //     { name: 'required', message: 'Tanggal publikasi wajib diisi.' }
      //   ]
      // },
    ]
  },

  // BARIS 4: Satu Kolom (Checkbox)
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
      // {
      //   type: 'checkbox',
      //   name: 'acceptTerms',
      //   label: 'Dengan ini saya menyetujui syarat dan ketentuan yang berlaku',
      //   validations: [
      //     { name: 'required', message: 'Anda wajib mencentang bagian ini.' }
      //   ]
      // }
    ]
  },

  // BARIS 5: Satu Kolom (Toggle)
  {
    fields: [
      {
        type: 'select',
        name: 'categoryProduct',
        label: 'Kategori Produk',
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

  // BARIS 6: Dua Kolom (File Upload)
  {
    fields: [
      {
        type: 'toggle',
        name: 'isActive',
        label: 'Is active',
      },
      // {
      //   type: 'file',
      //   name: 'coverImage', // Nama harus unik
      //   label: 'Gambar Sampul (Boxed)',
      //   validations: [
      //     { name: 'required', message: 'Gambar harus diisi.' }
      //   ],
      //   accept: 'image/*',
      //   note: 'Format yang diterima: JPG, PNG.',
      //   boxed: true,
      //   keterangan: 'Pastikan resolusi gambar 1920x1080'
      // }
    ]
  },
];

  onProfileUpdate(formData: any) {
    console.log('Data profil berhasil diupdate:', formData);
    // Kirim formData ke API Anda di sini
  }
}
