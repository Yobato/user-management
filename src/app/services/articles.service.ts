import { Injectable } from '@angular/core';


export interface DataItem  {
  id: number;
  judul: string;
  deskripsi: string;
  kategori: string;
  approver: string;
  update_date: string;
  highlight: string;
  artikel_image: File | string;
  status_approval: string;
  status_fung: string;
  refrensi: string;
}

@Injectable({
  providedIn: 'root'
})

export class ArticlesService {

  allArticles: DataItem[] = [
    {
      id: 1,
      judul: "Tips Memilih KPR Syariah untuk Rumah Pertama",
      deskripsi: "Panduan lengkap memilih produk KPR syariah yang sesuai dengan kemampuan finansial dan kebutuhan keluarga muda.",
      kategori: "reguler",
      approver: "Budi Santoso",
      update_date: "2025-09-02",
      highlight: "NO",
      artikel_image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=400",
      status_approval: "Approved",
      status_fung: "Active",
      refrensi: "https://www.ojk.go.id/panduan/kpr-syariah"
    },
    {
      id: 2,
      judul: "5 Desain Dapur Minimalis untuk Apartemen Tipe Studio",
      deskripsi: "Inspirasi desain dapur yang hemat ruang namun tetap fungsional dan estetis untuk unit apartemen kompak.",
      kategori: "simuda",
      approver: "Sari Dewi",
      update_date: "2025-09-01",
      highlight: "YES",
      artikel_image: "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=400",
      status_approval: "Pending",
      status_fung: "Active",
      refrensi: "https://www.archdaily.com/tag/small-kitchen"
    },
    {
      id: 3,
      judul: "Cek NJOP Sebelum Membeli Properti, Ini Caranya!",
      deskripsi: "Langkah-langkah mudah untuk memeriksa Nilai Jual Objek Pajak (NJOP) secara online untuk menghindari penipuan.",
      kategori: "haji",
      approver: "Rimba Ananta",
      update_date: "2025-08-30",
      highlight: "NO",
      artikel_image: "https://images.pexels.com/photos/7578857/pexels-photo-7578857.jpeg?auto=compress&cs=tinysrgb&w=400",
      status_approval: "Approved",
      status_fung: "Inactive",
      refrensi: "https://pajak.go.id/artikel/apa-itu-njop"
    },
    {
      id: 4,
      judul: "Perbedaan Sertifikat Hak Milik (SHM) dan HGB",
      deskripsi: "Pahami perbedaan mendasar antara SHM dan Hak Guna Bangunan (HGB) agar tidak salah langkah saat investasi properti.",
      kategori: "reguler",
      approver: "Budi Santoso",
      update_date: "2025-08-28",
      highlight: "NO",
      artikel_image: "https://images.pexels.com/photos/8089255/pexels-photo-8089255.jpeg?auto=compress&cs=tinysrgb&w=400",
      status_approval: "Rejected",
      status_fung: "Inactive",
      refrensi: "https://www.atrbpn.go.id/layanan-pertanahan/sertipikat-tanah"
    },
    {
      id: 5,
      judul: "KPR Take Over: Keuntungan dan Risikonya",
      deskripsi: "Apakah memindahkan KPR Anda ke bank lain adalah pilihan yang tepat? Simak ulasan lengkapnya di sini.",
      kategori: "reguler",
      approver: "Lulu Prameswari",
      update_date: "2025-08-25",
      highlight: "YES",
      artikel_image: "https://images.pexels.com/photos/5849574/pexels-photo-5849574.jpeg?auto=compress&cs=tinysrgb&w=400",
      status_approval: "Approved",
      status_fung: "Active",
      refrensi: "https://sikapiuangmu.ojk.go.id/FrontEnd/CMS/Article/30591"
    },
    {
      id: 6,
      judul: "Ide Taman Vertikal untuk Balkon Sempit",
      deskripsi: "Solusi penghijauan untuk hunian vertikal. Ciptakan oase pribadi di balkon apartemen Anda.",
      kategori: "simuda",
      approver: "Sari Dewi",
      update_date: "2025-08-22",
      highlight: "NO",
      artikel_image: "https://images.pexels.com/photos/1029606/pexels-photo-1029606.jpeg?auto=compress&cs=tinysrgb&w=400",
      status_approval: "Sendback",
      status_fung: "Pending",
      refrensi: "https://www.housebeautiful.com/lifestyle/gardening/g2313/vertical-gardening-ideas/"
    },
  ]

  getArticleById(id: number): DataItem | undefined {
    return this.allArticles.find(item => item.id === id);
  }

  getAllArticles(): DataItem[] {
    return this.allArticles;
  }
}
