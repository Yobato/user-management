import { Injectable } from '@angular/core';

export interface DataItem {
  id: number;
  label_name: string,
  image_logo?: File | string;
  deskripsi: string;
  visi: string;
  misi: string;
  image_structure?: File | string;
  status_approval: string;
  reason: string;
  visibility: boolean;
  updated_by: string;
  updated_at: Date;
}

@Injectable({
  providedIn: 'root'
})

export class AboutUsService {

  private aboutUsData: DataItem =
    {
      id: 1,
      label_name: "Bank Syariah Indonesia",
      image_logo: "https://via.placeholder.com/150/007BFF/FFFFFF?text=Logo",
      deskripsi: "Kami adalah perusahaan teknologi terdepan yang berfokus pada pengembangan solusi digital inovatif untuk membantu bisnis bertransformasi dan bertumbuh di era digital.",
      visi: "Menjadi mitra teknologi paling tepercaya di Asia Tenggara.",
      misi: "1. Menyediakan produk software berkualitas tinggi.\n2. Memberikan layanan pelanggan yang luar biasa.\n3. Menciptakan lingkungan kerja yang positif dan kolaboratif.", // \n untuk baris baru
      image_structure: "https://via.placeholder.com/600x400/DEE2E6/495057?text=Struktur+Organisasi",
      status_approval: "Rejected",
      reason: "Data sudah lengkap dan diverifikasi.",
      visibility: true,
      updated_by: "Admin Utama",
      updated_at: new Date("2025-09-23T14:30:00"),
    }

  getAboutUs(): DataItem{
    return this.aboutUsData;
  }

  updateAboutUs(updatedData: DataItem): void{
    this.aboutUsData = {...this.aboutUsData, ...updatedData};
    console.log("Data About Us berhasil diperbarui:", this.aboutUsData);
  }

}
