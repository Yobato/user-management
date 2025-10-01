import { Injectable } from '@angular/core';

export interface DataItem {
  id: number;
  title: string;
  target: string;
  name: string;
  periode: string;
  approval: string;
  update_date: string;
  status_approval: string;
  status_fung: string;
}

@Injectable({
  providedIn: 'root'
})

export class PromoService {
  allData: DataItem[] = [
    {
      id: 1,
      title: "Cara Efektif Belajar Next.js",
      target: "User 1",
      name: "Griya Regular",
      periode: "Budi Santoso",
      approval: "Lamudinan",
      update_date: "12 Mei 2025",
      status_approval: "Active",
      status_fung: "Active"
    },
    {
      id: 2,
      title: "Resep Nasi Goreng Spesial",
      target: "User 2",
      name: "Griya Regular",
      periode: "Griya Regular",
      approval: "Lamudinan",
      update_date: "12 Mei 2025",
      status_approval: "Pending",
      status_fung: "Active"
    },
    {
      id: 3,
      title: "Tips Fotografi Ponsel untuk Media Sosial",
      target: "User 3",
      name: "Griya Regular",
      periode: "Griya Regular",
      approval: "Lamudinan",
      update_date: "12 Mei 2025",
      status_approval: "Approved",
      status_fung: "Inactive"
    },
    {
      id: 4,
      title: "Panduan Investasi Reksa Dana untuk Pemula",
      target: "User 4",
      name: "Griya Regular",
      periode: "Griya Regular",
      approval: "Lamudinan",
      update_date: "12 Mei 2025",
      status_approval: "Inactive",
      status_fung: "Inactive"
    },
    {
      id: 5,
      title: "Review Film Terbaru: The Final Chapter",
      target: "User 5",
      name: "Griya Regular",
      periode: "Griya Regular",
      approval: "Lamudinan",
      update_date: "12 Mei 2025",
      status_approval: "Approved",
      status_fung: "Active"
    },
    {
      id: 6,
      title: "Sejarah Kerajaan Majapahit",
      target: "User 6",
      name: "Mitra Guna",
      periode: "Mitra Guna",
      approval: "Lamudinan",
      update_date: "12 Mei 2025",
      status_approval: "Sendback",
      status_fung: "Pending"
    },
    {
      id: 7,
      title: "Mengenal Machine Learning dalam 10 Menit",
      target: "User 7",
      name: "Mitra Guna",
      periode: "Mitra Guna",
      approval: "Lamudinan",
      update_date: "12 Mei 2025",
      status_approval: "Approved",
      status_fung: "Active"
    },
    {
      id: 8,
      title: "Cara Membuat Kue Cokelat Tanpa Oven",
      target: "User 8",
      name: "Mitra Guna",
      periode: "Mitra Guna",
      approval: "Lamudinan",
      update_date: "12 Mei 2025",
      status_approval: "Approved",
      status_fung: "Active"
    },
    {
      id: 9,
      title: "Teknik Dasar Berkebun di Lahan Sempit",
      target: "User 9",
      name: "Mitra Guna",
      periode: "Mitra Guna",
      approval: "Lamudinan",
      update_date: "12 Mei 2025",
      status_approval: "Sendback",
      status_fung: "Pending",
    },
    {
      id: 10,
      title: "Manajemen Utang yang Sehat",
      target: "User 10",
      name: "Mitra Guna",
      periode: "Mitra Guna",
      approval: "Lamudinan",
      update_date: "12 Mei 2025",
      status_approval: "Approved",
      status_fung: "Inactive",
    },
  ];

  getById(id: number): DataItem | undefined {
    return this.allData.find(item => item.id === id);
  }

  create(data: Partial<DataItem>): void { /* ... */ }
  
  update(id: number, data: Partial<DataItem>): void { /* ... */ }

  getPromoData(): DataItem[] {
    return this.allData;
  }
}
