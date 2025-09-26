import { Injectable } from '@angular/core';

export interface DataItem {
  id: number;
  nama_produk: string,
  jenis_produk: string,
  kategori: string;
  detail: string;
  uploader: string;
  approver: string;
  update_date: string;
  produk_image: File | string;
  status_approval: string;
  status_fung: string;
  highlight?: string;
}

@Injectable({
  providedIn: 'root'
})

export class ProdukService {

  public allProducts: DataItem[] =[
  { id: 1, nama_produk: "Cara Efektif Belajar Next.js", detail: "Panduan lengkap untuk pemula hingga mahir dalam menggunakan Next.js.", kategori: "reguler", jenis_produk: "griya", uploader: "Tim Edukasi", approver: "Budi Santoso", update_date: "2025-09-02", highlight: "NO", produk_image: "https://picsum.photos/seed/10/200/150", status_approval: "Approved", status_fung: "Active" },
  { id: 2, nama_produk: "Manajemen Waktu untuk Produktivitas", detail: "Strategi praktis untuk mengatur jadwal agar lebih efisien.", kategori: "srimuda", jenis_produk: "griya", uploader: "Sari Utami", approver: "Ani Wulandari", update_date: "2025-08-25", highlight: "YES", produk_image: "https://picsum.photos/seed/10/200/150", status_approval: "Approved", status_fung: "Inactive" },
  { id: 3, nama_produk: "Pengantar Keuangan Syariah", detail: "Dasar-dasar sistem keuangan berbasis syariah.", kategori: "haji", jenis_produk: "griya_subsidi", uploader: "Rahmat Hidayat", approver: "Rahmat Hidayat", update_date: "2025-08-20", highlight: "NO", produk_image: "https://picsum.photos/seed/10/200/150", status_approval: "Pending", status_fung: "Inactive" },
  { id: 4, nama_produk: "Dasar-dasar Machine Learning", detail: "Konsep fundamental dan algoritma dasar dalam machine learning.", kategori: "reguler", jenis_produk: "griya", uploader: "Siti Nurhaliza", approver: "Siti Nurhaliza", update_date: "2025-07-30", highlight: "YES", produk_image: "https://picsum.photos/seed/10/200/150", status_approval: "Approved", status_fung: "Active" },
  { id: 5, nama_produk: "Mindfulness untuk Kesehatan Mental", detail: "Latihan mindfulness sederhana untuk keseharian.", kategori: "simuda", jenis_produk: "griya", uploader: "Yusuf Pratama", approver: "Yusuf Pratama", update_date: "2025-08-15", highlight: "NO", produk_image: "https://picsum.photos/seed/10/200/150", status_approval: "Rejected", status_fung: "Inactive" },
  { id: 6, nama_produk: "Optimasi Database untuk Aplikasi Web", detail: "Teknik meningkatkan performa query database.", kategori: "reguler", jenis_produk: "griya", uploader: "Dewi Lestari", approver: "Dewi Lestari", update_date: "2025-07-18", highlight: "NO", produk_image: "https://picsum.photos/seed/10/200/150", status_approval: "Approved", status_fung: "Active" },
  { id: 7, nama_produk: "Investasi Saham untuk Pemula", detail: "Langkah-langkah awal dalam memulai investasi saham.", kategori: "haji", jenis_produk: "griya", uploader: "Bambang Irawan", approver: "Bambang Irawan", update_date: "2025-07-10", highlight: "YES", produk_image: "https://picsum.photos/seed/10/200/150", status_approval: "Sendback", status_fung: "Inactive" },
  { id: 8, nama_produk: "Teknik Presentasi yang Memukau", detail: "Tips dan trik agar presentasi lebih menarik.", kategori: "simuda", jenis_produk: "griya", uploader: "Linda Agustina", approver: "Linda Agustina", update_date: "2025-06-28", highlight: "NO", produk_image: "https://picsum.photos/seed/10/200/150", status_approval: "Approved", status_fung: "Active" },
  { id: 9, nama_produk: "Pengenalan Cloud Computing", detail: "Konsep dasar dan layanan populer cloud computing.", kategori: "reguler", jenis_produk: "griya", uploader: "Agus Saputra", approver: "Agus Saputra", update_date: "2025-06-20", highlight: "NO", produk_image: "https://picsum.photos/seed/10/200/150", status_approval: "Approved", status_fung: "Inactive" },
  { id: 10, nama_produk: "Pengelolaan Keuangan Pribadi", detail: "Cara membuat anggaran dan mengelola tabungan.", kategori: "haji", jenis_produk: "griya", uploader: "Nur Aisyah", approver: "Nur Aisyah", update_date: "2025-06-10", highlight: "YES", produk_image: "https://picsum.photos/seed/10/200/150", status_approval: "Pending", status_fung: "Inactive" },
  { id: 11, nama_produk: "Design Thinking dalam Inovasi Produk", detail: "Pendekatan kreatif dalam merancang produk baru.", kategori: "simuda", jenis_produk: "griya", uploader: "Ridwan Kamil", approver: "Ridwan Kamil", update_date: "2025-05-30", highlight: "YES", produk_image: "https://picsum.photos/seed/10/200/150", status_approval: "Approved", status_fung: "Active" },
  { id: 12, nama_produk: "Algoritma dan Struktur Data", detail: "Materi dasar yang wajib dikuasai programmer.", kategori: "reguler", jenis_produk: "griya_subsidi", uploader: "Ahmad Fauzi", approver: "Ahmad Fauzi", update_date: "2025-05-25", highlight: "NO", produk_image: "https://picsum.photos/seed/10/200/150", status_approval: "Rejected", status_fung: "Inactive" },
  { id: 13, nama_produk: "Psikologi Komunikasi", detail: "Bagaimana pola komunikasi memengaruhi hubungan sosial.", kategori: "simuda", jenis_produk: "griya", uploader: "Mega Sari", approver: "Mega Sari", update_date: "2025-05-18", highlight: "NO", produk_image: "https://picsum.photos/seed/10/200/150", status_approval: "Approved", status_fung: "Inactive" },
  { id: 14, nama_produk: "Akuntansi Dasar untuk UMKM", detail: "Pencatatan keuangan sederhana untuk usaha kecil.", kategori: "haji", jenis_produk: "griya", uploader: "Taufik Hidayat", approver: "Taufik Hidayat", update_date: "2025-05-10", highlight: "NO", produk_image: "https://picsum.photos/seed/10/200/150", status_approval: "Sendback", status_fung: "Inactive" },
  { id: 15, nama_produk: "Cyber Security Fundamentals", detail: "Prinsip dasar keamanan siber untuk organisasi.", kategori: "reguler", jenis_produk: "griya", uploader: "Rina Kurnia", approver: "Rina Kurnia", update_date: "2025-05-02", highlight: "YES", produk_image: "https://picsum.photos/seed/10/200/150", status_approval: "Approved", status_fung: "Active" },
  { id: 16, nama_produk: "Self Leadership", detail: "Mengelola diri untuk menjadi pemimpin yang efektif.", kategori: "simuda", jenis_produk: "griya", uploader: "Eko Wibowo", approver: "Eko Wibowo", update_date: "2025-04-28", highlight: "NO", produk_image: "https://picsum.photos/seed/10/200/150", status_approval: "Pending", status_fung: "Inactive" },
  { id: 17, nama_produk: "Blockchain untuk Pemula", detail: "Memahami teknologi blockchain secara sederhana.", kategori: "reguler", jenis_produk: "griya", uploader: "Andi Wijaya", approver: "Andi Wijaya", update_date: "2025-04-20", highlight: "YES", produk_image: "https://picsum.photos/seed/10/200/150", status_approval: "Approved", status_fung: "Active" },
  { id: 18, nama_produk: "Etika Bisnis Modern", detail: "Mengupas praktik etis dalam dunia bisnis.", kategori: "simuda", jenis_produk: "griya", uploader: "Sri Rahayu", approver: "Sri Rahayu", update_date: "2025-04-12", highlight: "NO", produk_image: "https://picsum.photos/seed/10/200/150", status_approval: "Rejected", status_fung: "Inactive" },
  { id: 19, nama_produk: "Dasar Pemrograman Python", detail: "Bahasa pemrograman populer untuk berbagai kebutuhan.", kategori: "reguler", jenis_produk: "griya", uploader: "Toni Saputra", approver: "Toni Saputra", update_date: "2025-04-05", highlight: "NO", produk_image: "https://picsum.photos/seed/10/200/150", status_approval: "Approved", status_fung: "Inactive" },
  { id: 20, nama_produk: "Mengelola Hutang dengan Bijak", detail: "Tips praktis mengelola hutang agar tidak memberatkan.", kategori: "haji", jenis_produk: "griya_subsidi", uploader: "Diana Anggraini", approver: "Diana Anggraini", update_date: "2025-03-28", highlight: "YES", produk_image: "https://picsum.photos/seed/10/200/150", status_approval: "Sendback", status_fung: "Inactive" },
  { id: 21, nama_produk: "Kecerdasan Emosional", detail: "Mengasah kemampuan mengelola emosi dalam pekerjaan.", kategori: "simuda", jenis_produk: "griya", uploader: "Fajar Nugraha", approver: "Fajar Nugraha", update_date: "2025-03-20", highlight: "NO", produk_image: "https://picsum.photos/seed/10/200/150", status_approval: "Approved", status_fung: "Active" },
  { id: 22, nama_produk: "Analisis Data dengan Excel", detail: "Teknik analisis data sederhana menggunakan Excel.", kategori: "reguler", jenis_produk: "griya", uploader: "Rudi Hartono", approver: "Rudi Hartono", update_date: "2025-03-12", highlight: "NO", produk_image: "https://picsum.photos/seed/10/200/150", status_approval: "Pending", status_fung: "Inactive" },
  { id: 23, nama_produk: "Strategi Pemasaran Digital", detail: "Cara memasarkan produk melalui kanal digital.", kategori: "simuda", jenis_produk: "griya", uploader: "Putri Ayu", approver: "Putri Ayu", update_date: "2025-03-05", highlight: "YES", produk_image: "https://picsum.photos/seed/10/200/150", status_approval: "Approved", status_fung: "Inactive" },
  { id: 24, nama_produk: "Ekonomi Mikro", detail: "Pembahasan mengenai perilaku ekonomi pada skala kecil.", kategori: "haji", jenis_produk: "griya", uploader: "Hendri Susanto", approver: "Hendri Susanto", update_date: "2025-02-27", highlight: "NO", produk_image: "https://picsum.photos/seed/10/200/150", status_approval: "Rejected", status_fung: "Inactive" },
  { id: 25, nama_produk: "Kecerdasan Buatan dalam Bisnis", detail: "Pemanfaatan AI untuk mendukung keputusan bisnis.", kategori: "reguler", jenis_produk: "griya", uploader: "Fitri Handayani", approver: "Fitri Handayani", update_date: "2025-02-20", highlight: "YES", produk_image: "https://picsum.photos/seed/10/200/150", status_approval: "Approved", status_fung: "Active" }
]



  getById(id: number): DataItem | undefined {
    return this.allProducts.find(item => item.id === id);
  }

  create(data: Partial<DataItem>): void { /* ... */ }

  update(id: number, data: Partial<DataItem>): void { /* ... */ }

  getAllProducts(): DataItem[] {
    return this.allProducts;
  }


}
