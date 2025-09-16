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

  // ===== COTNTOH PENGGUNAAN RENDERER CUSTOM =====

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
  {
    fields: [{
      type: 'display',
      renderType: 'subtitle',
      label: '',
      name: 'personalDataSubtitle',
      data: {
        text: 'Detail Informasi Pribadi'
      }
    }]
  },
  {
    fields: [
      {
        type: 'text',
        name: 'titleDummy',
        label: 'Judul Dummy',
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
        label: 'Deskripsi Dummy',
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
        name: 'refrenceDummy',
        label: 'Refrensi Dummy',
        placeholder: 'Masukkan link refrensi article',
        validations: [
          { name: 'required', message: 'Refrensi Artikel wajib diisi.' },
          { name: 'minLength', value: 5, message: 'Link minimal 5 karakter.' }
        ],
      },
      {
        type: 'select',
        name: 'userRole',
        label: 'Peran Pengguna',
        options: [
          { value: 'admin', label: 'Administrator' },
          { value: 'editor', label: 'Editor Konten' },
          { value: 'viewer', label: 'Hanya Lihat' }
        ],
        validations: [
          { name: 'required', message: 'Peran wajib dipilih.' }
        ]
      },
      {
        type: 'date',
        name: 'publicationDate',
        label: 'Tanggal Publikasi',
        validations: [
          { name: 'required', message: 'Tanggal publikasi wajib diisi.' }
        ]
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
      {
        type: 'checkbox',
        name: 'acceptTerms',
        label: 'Dengan ini saya menyetujui syarat dan ketentuan yang berlaku',
        validations: [
          { name: 'required', message: 'Anda wajib mencentang bagian ini.' }
        ]
      }
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

  {
    fields: [
      {
        type: 'toggle',
        name: 'isActive',
        label: 'Is active',
      },
      {
        type: 'file',
        name: 'coverImage', // Nama harus unik
        label: 'Gambar Sampul (Boxed)',
        validations: [
          { name: 'required', message: 'Gambar harus diisi.' }
        ],
        accept: 'image/*',
        note: 'Format yang diterima: JPG, PNG.',
        boxed: true,
        keterangan: 'Pastikan resolusi gambar 1920x1080'
      }
    ]
  },

  // ===== CONTOH KONDISIONAL FIELD =====
  {
    fields: [
      {
        type: 'select',
        name: 'status',
        label: 'Status Persetujuan',
        options: [
          { value: 'approved', label: 'Approved' },
          { value: 'rejected', label: 'Rejected' },
          { value: 'revision', label: 'Need Revision' }
        ],
        validations: [{ name: 'required', message: 'Status wajib diisi.' }]
      }
    ]
  },

  // BARIS 2: Field Alasan (KONDISIONAL)
  {
    fields: [
      {
        type: 'textarea',
        name: 'reason',
        label: 'Alasan Penolakan/Revisi',
        rows: 3,
        // Aturan validasi HANYA aktif saat field ini muncul
        validations: [{ name: 'required', message: 'Alasan wajib diisi.' }],
        // --- ATURAN KONDISIONALNYA ---
        showIf: {
          fieldName: 'status',       // Pantau field 'status'
          condition: 'notEquals',    // Tampil jika nilainya TIDAK SAMA DENGAN
          value: 'approved'        // 'approved'
        }
      }
    ]
  }
];

  onProfileUpdate(formData: any) {
    console.log('Data profil berhasil diupdate:', formData);
    // Kirim formData ke API Anda di sini
  }
}
