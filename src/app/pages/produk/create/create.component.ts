import { Component } from '@angular/core';
import { FormRow } from '../../../components/forms/field.config';

@Component({
  selector: 'app-create',
  standalone: false,
  templateUrl: './create.html',
  styleUrl: './create.css'
})
export class CreateProdukPage {
  public productFormConfig: FormRow[] = [
    {
      fields: [
        {
          type: 'text',
          name: 'productName',
          label: 'Nama Produk',
          placeholder: 'Masukkan nama produk',
          validations: [
            { name: 'required', message: 'Nama Produk wajib diisi.' },
            { name: 'minLength', value: 3, message: 'Nama harus lebih dari 2 karakter.' }
          ],
        },
      ]
    },
    {
      fields: [
        {
          type: 'select',
          name: 'jenisProduct',
          label: 'Jenis Produk',
          options: [
            { value: 'griya', label: 'Griya' },
            { value: 'griya_subsidi', label: 'Griya Subsidi' }
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
          type: 'textarea',
          name: 'detail_product',
          label: 'Detail Produk',
          rows: 4,
          placeholder: "Masukkan detail produk Anda",
          validations: [
              { name: 'required', message: 'Deskripsi wajib diisi.' },
          ]
        }
      ]
    },
    {
      fields: [
        {
          type: 'file',
          name: 'productPicture', // Nama harus unik
          label: 'Foto Produk',
          validations: [
            { name: 'required', message: 'Gambar harus diisi.' }
          ],
          accept: 'image/*',
          note: 'Maksimum ukuran file 2MB.'
        },
      ]
    },
  ];

  onProfileUpdate(formData: any) {
    console.log('Data article berhasil diupdate:', formData);
  }


}
