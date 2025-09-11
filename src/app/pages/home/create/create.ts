import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldConfig } from '../../../components/forms/field.config';
import { DynamicFormComponent } from '../../../components/forms/dynamic-form.component';

@Component({
  selector: 'app-profile-settings',
  standalone: true,
  imports: [CommonModule, DynamicFormComponent],
  templateUrl: "./create.html"
})
export class CreatePage {
  // Inilah "blueprint" untuk form Anda
  profileFormConfig: FieldConfig[] = [
    {
      type: 'text',
      name: 'fullName',
      label: 'Nama Lengkap',
      placeholder: 'Masukkan nama lengkap Anda',
      initialValue: 'Budi Santoso',
      validations: [
        { name: 'required', message: 'Nama Lengkap wajib diisi.' },
        { name: 'minLength', value: 3, message: 'Nama harus lebih dari 2 karakter.' }
      ],
    },
    {
      type: 'text',
      name: 'email',
      label: 'Alamat Email',
      placeholder: 'contoh@email.com',
      validations: [
        { name: 'required', message: 'Email wajib diisi.' },
        { name: 'email', message: 'Format email tidak valid.' }
      ]
    },
    {
    type: 'textarea',
    name: 'long_description',
    label: 'Deskripsi Lengkap',
    rows: 4,
    placeholder: "Ceritakan tentang deskripsi Anda",
    validations: [
        { name: 'required', message: 'Deskripsi wajib diisi.' },
    ]
  },
  {
    type: 'select',
    name: 'userRole',
    label: 'Peran Pengguna',
    // initialValue: null, // Nilai awal
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
    // initialValue: '2025-09-11', // Gunakan format YYYY-MM-DD
    validations: [
      { name: 'required', message: 'Tanggal publikasi wajib diisi.' }
    ]
  }
    // Anda bisa tambahkan field lain di sini
  ];

  onProfileUpdate(formData: any) {
    console.log('Data profil berhasil diupdate:', formData);
    // Kirim formData ke API Anda di sini
  }
}
