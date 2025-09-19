import { Component, OnInit } from '@angular/core';
import { DataItem, ProdukService } from '../../../services/produk.service';
import { ActivatedRoute } from '@angular/router';
import { FormRow } from '../../../components/forms/field.config';

@Component({
  selector: 'app-edit',
  standalone: false,
  templateUrl: './edit.html',
  styleUrl: './edit.css'
})
export class EditProdukPage implements OnInit {
  productId: string | null = null;
  productData: DataItem | undefined;

  constructor(
    private route: ActivatedRoute,
    private productService: ProdukService,
  ){}

  isDataReady = false;

  public productFormConfig: FormRow[] = [
      {
        fields: [
          {
            type: 'text',
            name: 'nama_produk',
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
            name: 'jenis_produk',
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
            name: 'kategori',
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
            name: 'detail',
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
            name: 'produk_image', // Nama harus unik
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

  ngOnInit(): void{
    this.productId = this.route.snapshot.paramMap.get('id');

    if(this.productId){
      this.productData = this.productService.getProductById(+this.productId);

      if(this.productData){
        console.log("Ini Image",this.productData.produk_image)
        this.prepareFormProdukConfig();
        this.isDataReady = true;
      } else {
        console.log("Produk tidak ditemukan");
      }
    }
  }

  prepareFormProdukConfig(): void{
    this.productFormConfig.forEach(row =>{
      row.fields.forEach(field =>{
        console.log(field.name);
        if(this.productData && field.name in this.productData){
          field.initialValue = this.productData[field.name as keyof DataItem]
        }
      });
    });
  }

  onProductUpdate(formData: any) {
    console.log('Data product berhasil diupdate:', formData);
  }


}
