import { Component } from '@angular/core';
import { TableColumn } from '../../components/table-untitled/table-untitled.component';

export interface DataItem {
  id: number;
  judul: string;
  deskripsi: string;
  kategori: string;
  approver: string;
  update_date: string;
  highlight: string;
  status_approval: string;
  status_fung: string;
}

@Component({
  selector: 'app-article',
  standalone: false,
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticlePage {
    public page: number = 1;
    public query: string = ''; // State untuk menampung teks pencarian
    public itemsPerPage: number = 7;

    disabled = false; // nggak usah @Input kalau ini internal

    // component.ts
    tableCols: TableColumn[] = [
      { key: 'judul', label: 'Judul', sortable: true, customStyle: {width: "600px !important"} },
      { key: 'deskripsi', label: 'Deskripsi', sortable: true },
      { key: 'kategori', label: 'Kategori', sortable: true },
      { key: 'approver', label: 'Approver', sortable: true },
      { key: 'update_date', label: 'Update Date', sortable: true },
      { key: 'highlight', label: 'Highlight', type: 'badge', sortable: true },
      { key: 'status_approval', label: 'Status', type: 'badge', sortable: true },
      { key: 'status_fung', label: 'Fungsi', type: 'badge', sortable: true },
      { key: 'actions', label: 'Actions', isAction: true }
    ];

     public tableData: DataItem[] = [
      { id: 1, judul: "Cara Efektif Belajar Next.js", deskripsi: "Panduan lengkap untuk pemula hingga mahir dalam...", kategori: "Teknologi", approver: "Budi Santoso", update_date: "2025-09-02", highlight: "NO", status_approval: "Active", status_fung: "Active" },
      { id: 2, judul: "Resep Nasi Goreng Spesial", deskripsi: "Rahasia membuat nasi goreng seenak restoran bintang lima...", kategori: "Kuliner", approver: "Sari Dewi", update_date: "2025-09-01", highlight: "YES", status_approval: "Pending", status_fung: "Active" },
      { id: 3, judul: "Tips Fotografi Ponsel untuk Media Sosial", deskripsi: "Maksimalkan kamera ponsel Anda untuk konten yang...", kategori: "Hobi", approver: "Rimba Ananta", update_date: "2025-08-30", highlight: "NO", status_approval: "Approved", status_fung: "Inactive" },
      { id: 4, judul: "Panduan Investasi Reksa Dana untuk Pemula", deskripsi: "Mulai berinvestasi dengan modal kecil dan risiko...", kategori: "Keuangan", approver: "Budi Santoso", update_date: "2025-08-28", highlight: "NO", status_approval: "Inactive", status_fung: "Inactive" },
      { id: 5, judul: "Review Film Terbaru: The Final Chapter", deskripsi: "Apakah sekuel ini berhasil memenuhi ekspektasi para...", kategori: "Hiburan", approver: "Lulu Prameswari", update_date: "2025-08-25", highlight: "YES", status_approval: "Approved", status_fung: "Active" },
      { id: 6, judul: "Sejarah Kerajaan Majapahit", deskripsi: "Menelusuri jejak salah satu kerajaan terbesar di...", kategori: "Sejarah", approver: "Sari Dewi", update_date: "2025-08-22", highlight: "NO", status_approval: "Sendback", status_fung: "Pending" },
      { id: 7, judul: "Mengenal Machine Learning dalam 10 Menit", deskripsi: "Konsep dasar dan penerapan machine learning di industri...", kategori: "Teknologi", approver: "Rimba Ananta", update_date: "2025-08-21", highlight: "YES", status_approval: "Approved", status_fung: "Active" },
      { id: 8, judul: "Cara Membuat Kue Cokelat Tanpa Oven", deskripsi: "Solusi praktis bagi Anda yang ingin membuat kue lezat...", kategori: "Kuliner", approver: "Lulu Prameswari", update_date: "2025-08-20", highlight: "NO", status_approval: "Approved", status_fung: "Active" },
          {
        id: 9,
        judul: "Teknik Dasar Berkebun di Lahan Sempit",
        deskripsi: "Manfaatkan ruang terbatas untuk menanam sayuran...",
        kategori: "Hobi",
        approver: "Budi Santoso",
        update_date: "2025-08-19",
        highlight: "NO",
        status_approval: "Sendback",
        status_fung: "Pending",
      },
      {
        id: 10,
        judul: "Manajemen Utang yang Sehat",
        deskripsi: "Strategi keluar dari jeratan utang dan mencapai...",
        kategori: "Keuangan",
        approver: "Sari Dewi",
        update_date: "2025-08-18",
        highlight: "YES",
        status_approval: "Approved",
        status_fung: "Inactive",
      },
      {
        id: 11,
        judul: "10 Film Animasi Terbaik Sepanjang Masa",
        deskripsi: "Daftar film animasi yang wajib ditonton setidaknya...",
        kategori: "Hiburan",
        approver: "Rimba Ananta",
        update_date: "2025-08-15",
        highlight: "NO",
        status_approval: "Approved",
        status_fung: "Active",
      },
      {
        id: 12,
        judul: "Perang Dunia II: Latar Belakang dan Dampaknya",
        deskripsi: "Analisis mendalam tentang konflik global terbesar...",
        kategori: "Sejarah",
        approver: "Lulu Prameswari",
        update_date: "2025-08-14",
        highlight: "NO",
        status_approval: "Approved",
        status_fung: "Active",
      },
      {
        id: 13,
        judul: "Membangun REST API dengan Node.js dan Express",
        deskripsi: "Tutorial langkah demi langkah untuk developer pemula...",
        kategori: "Teknologi",
        approver: "Budi Santoso",
        update_date: "2025-08-12",
        highlight: "YES",
        status_approval: "Approved",
        status_fung: "Active",
      },
      {
        id: 14,
        judul: "Variasi Resep Sambal Nusantara",
        deskripsi: "Kumpulan resep sambal dari berbagai daerah di Indonesia...",
        kategori: "Kuliner",
        approver: "Sari Dewi",
        update_date: "2025-08-11",
        highlight: "NO",
        status_approval: "Approved",
        status_fung: "Active",
      },
      {
        id: 15,
        judul: "Belajar Melukis dengan Cat Air untuk Pemula",
        deskripsi: "Peralatan, teknik dasar, dan tips untuk memulai...",
        kategori: "Hobi",
        approver: "Rimba Ananta",
        update_date: "2025-08-10",
        highlight: "YES",
        status_approval: "Approved",
        status_fung: "Inactive",
      },
      {
        id: 16,
        judul: "Pentingnya Dana Darurat dan Cara Menyiapkannya",
        deskripsi: "Lindungi kondisi finansial Anda dari kejadian tak terduga...",
        kategori: "Keuangan",
        approver: "Lulu Prameswari",
        update_date: "2025-08-09",
        highlight: "NO",
        status_approval: "Sendback",
        status_fung: "Pending",
      },
      {
        id: 17,
        judul: "Analisis Karakter dalam Serial TV Populer",
        deskripsi: "Mengupas perkembangan karakter dan plot twist yang...",
        kategori: "Hiburan",
        approver: "Budi Santoso",
        update_date: "2025-08-08",
        highlight: "NO",
        status_approval: "Inactive",
        status_fung: "Inactive",
      },
      {
        id: 18,
        judul: "Revolusi Industri dan Perubahannya",
        deskripsi: "Dari mesin uap hingga kecerdasan buatan, bagaimana...",
        kategori: "Sejarah",
        approver: "Sari Dewi",
        update_date: "2025-08-07",
        highlight: "YES",
        status_approval: "Approved",
        status_fung: "Active",
      },
      {
        id: 19,
        judul: "Perbandingan Framework JavaScript: React vs Vue",
        deskripsi: "Kelebihan dan kekurangan masing-masing framework untuk...",
        kategori: "Teknologi",
        approver: "Rimba Ananta",
        update_date: "2025-08-06",
        highlight: "NO",
        status_approval: "Approved",
        status_fung: "Active",
      },
      {
        id: 20,
        judul: "Membuat Roti Sourdough di Rumah",
        deskripsi: "Panduan lengkap dari membuat starter hingga memanggang...",
        kategori: "Kuliner",
        approver: "Lulu Prameswari",
        update_date: "2025-08-05",
        highlight: "YES",
        status_approval: "Pending",
        status_fung: "Active",
      },
      {
        id: 21,
        judul: "Dasar-dasar Merajut untuk Melepas Stres",
        deskripsi: "Pelajari tusukan dasar dan buat proyek pertama Anda...",
        kategori: "Hobi",
        approver: "Budi Santoso",
        update_date: "2025-08-04",
        highlight: "NO",
        status_approval: "Approved",
        status_fung: "Inactive",
      },
      {
        id: 22,
        judul: "Cara Cerdas Mengelola Gaji Bulanan",
        deskripsi: "Metode alokasi gaji untuk tabungan, investasi, dan...",
        kategori: "Keuangan",
        approver: "Sari Dewi",
        update_date: "2025-08-02",
        highlight: "NO",
        status_approval: "Approved",
        status_fung: "Active",
      },
      {
        id: 23,
        judul: "Podcast Misteri yang Bikin Merinding",
        deskripsi: "Rekomendasi podcast bertema horor dan misteri untuk...",
        kategori: "Hiburan",
        approver: "Rimba Ananta",
        update_date: "2025-08-01",
        highlight: "YES",
        status_approval: "Inactive",
        status_fung: "Inactive",
      },
      {
        id: 24,
        judul: "Jalur Rempah: Jejak Perdagangan Dunia",
        deskripsi: "Bagaimana rempah-rempah membentuk peta dunia dan...",
        kategori: "Sejarah",
        approver: "Lulu Prameswari",
        update_date: "2025-07-31",
        highlight: "NO",
        status_approval: "Sendback",
        status_fung: "Pending",
      },
      {
        id: 25,
        judul: "Pengenalan TypeScript untuk Developer JavaScript",
        deskripsi: "Mengapa Anda harus beralih ke TypeScript dan bagaimana...",
        kategori: "Teknologi",
        approver: "Budi Santoso",
        update_date: "2025-07-30",
        highlight: "YES",
        status_approval: "Approved",
        status_fung: "Active",
      },
      {
        id: 26,
        judul: "Rahasia Dibalik Kopi Specialty",
        deskripsi: "Dari biji hingga cangkir, proses yang menentukan...",
        kategori: "Kuliner",
        approver: "Sari Dewi",
        update_date: "2025-07-29",
        highlight: "NO",
        status_approval: "Approved",
        status_fung: "Active",
      },
      {
        id: 27,
        judul: "Merawat Tanaman Hias Indoor agar Tumbuh Subur",
        deskripsi: "Tips penyiraman, pemupukan, dan penanganan hama...",
        kategori: "Hobi",
        approver: "Rimba Ananta",
        update_date: "2025-07-28",
        highlight: "NO",
        status_approval: "Pending",
        status_fung: "Active",
      },
      {
        id: 28,
        judul: "Memilih Asuransi Kesehatan yang Tepat",
        deskripsi: "Hal-hal yang perlu dipertimbangkan sebelum membeli...",
        kategori: "Keuangan",
        approver: "Lulu Prameswari",
        update_date: "2025-07-27",
        highlight: "YES",
        status_approval: "Active",
        status_fung: "Inactive",
      },
      {
        id: 29,
        judul: "Game Indie yang Patut Dicoba Tahun Ini",
        deskripsi: "Permata tersembunyi dari developer independen yang...",
        kategori: "Hiburan",
        approver: "Budi Santoso",
        update_date: "2025-07-26",
        highlight: "NO",
        status_approval: "Approved",
        status_fung: "Active",
      },
      {
        id: 30,
        judul: "Peradaban Kuno di Lembah Sungai Indus",
        deskripsi: "Misteri dan peninggalan dari salah satu peradaban...",
        kategori: "Sejarah",
        approver: "Sari Dewi",
        update_date: "2025-07-25",
        highlight: "NO",
        status_approval: "Inactive",
        status_fung: "Inactive",
      },
      {
        id: 31,
        judul: "Optimasi Performa Website dengan Next.js",
        deskripsi: "Teknik-teknik seperti SSR, SSG, dan ISR untuk...",
        kategori: "Teknologi",
        approver: "Rimba Ananta",
        update_date: "2025-07-24",
        highlight: "YES",
        status_approval: "Sendback",
        status_fung: "Pending",
      },
      {
        id: 32,
        judul: "Resep Minuman Segar untuk Cuaca Panas",
        deskripsi: "Kreasi minuman non-alkohol yang mudah dibuat dan...",
        kategori: "Kuliner",
        approver: "Lulu Prameswari",
        update_date: "2025-07-23",
        highlight: "NO",
        status_approval: "Approved",
        status_fung: "Active",
      },
      {
        id: 33,
        judul: "DIY: Membuat Rak Dinding Minimalis",
        deskripsi: "Proyek akhir pekan untuk mempercantik ruangan Anda...",
        kategori: "Hobi",
        approver: "Budi Santoso",
        update_date: "2025-07-22",
        highlight: "NO",
        status_approval: "Approved",
        status_fung: "Active",
      },
      {
        id: 34,
        judul: "Mengenal Saham Blue Chip di BEI",
        deskripsi: "Apa itu saham blue chip dan mengapa investor...",
        kategori: "Keuangan",
        approver: "Sari Dewi",
        update_date: "2025-07-21",
        highlight: "YES",
        status_approval: "Pending",
        status_fung: "Active",
      },
      {
        id: 35,
        judul: "Musik Lofi: Lebih dari Sekadar Musik Latar Belajar",
        deskripsi: "Fenomena budaya dan pengaruhnya terhadap...",
        kategori: "Hiburan",
        approver: "Rimba Ananta",
        update_date: "2025-07-20",
        highlight: "NO",
        status_approval: "Approved",
        status_fung: "Inactive",
      },
      {
        id: 36,
        judul: "Kisah di Balik Tembok Besar China",
        deskripsi: "Fakta-fakta menarik dan sejarah pembangunan...",
        kategori: "Sejarah",
        approver: "Lulu Prameswari",
        update_date: "2025-07-19",
        highlight: "YES",
        status_approval: "Approved",
        status_fung: "Active",
      },
      {
        id: 37,
        judul: "State Management di React: Redux vs Zustand",
        deskripsi: "Perbandingan dua pendekatan manajemen state yang...",
        kategori: "Teknologi",
        approver: "Budi Santoso",
        update_date: "2025-07-18",
        highlight: "NO",
        status_approval: "Inactive",
        status_fung: "Inactive",
      },
      {
        id: 38,
        judul: "Teknik Memasak Steak yang Sempurna",
        deskripsi: "Dari pemilihan daging hingga tingkat kematangan...",
        kategori: "Kuliner",
        approver: "Sari Dewi",
        update_date: "2025-07-17",
        highlight: "YES",
        status_approval: "Sendback",
        status_fung: "Pending",
      },
      {
        id: 39,
        judul: "Memulai Hobi Kaligrafi Modern",
        deskripsi: "Alat yang dibutuhkan dan latihan dasar untuk...",
        kategori: "Hobi",
        approver: "Rimba Ananta",
        update_date: "2025-07-16",
        highlight: "NO",
        status_approval: "Approved",
        status_fung: "Active",
      },
      {
        id: 40,
        judul: "Menghindari Kesalahan Finansial di Usia 20-an",
        deskripsi: "Kebiasaan-kebiasaan buruk yang harus dihindari agar...",
        kategori: "Keuangan",
        approver: "Lulu Prameswari",
        update_date: "2025-07-15",
        highlight: "NO",
        status_approval: "Approved",
        status_fung: "Active",
      },

    ];

    onSortChange(e: { key: string; direction: 'asc' | 'desc' }) {
      // Buat array baru dari this.tableData, lalu urutkan
      this.tableData = [...this.tableData].sort((a, b) => {
        const key = e.key as keyof DataItem;
        if (a[key] < b[key]) return e.direction === 'asc' ? -1 : 1;
        if (a[key] > b[key]) return e.direction === 'asc' ? 1 : -1;
        return 0;
      });
    }

     public get filteredData(): DataItem[] {
      if (!this.query) {
        return this.tableData;
      }
      const queryLower = this.query.toLowerCase();
      return this.tableData.filter(
        (row) =>
          row.judul.toLowerCase().includes(queryLower) ||
          row.deskripsi.toLowerCase().includes(queryLower) ||
          row.kategori.toLowerCase().includes(queryLower) ||
          row.approver.toLowerCase().includes(queryLower) ||
          row.update_date.toLowerCase().includes(queryLower) ||
          row.highlight.toLowerCase().includes(queryLower) ||
          row.status_approval.toLowerCase().includes(queryLower) ||
          row.status_fung.toLowerCase().includes(queryLower)
      );
    }

    // 2. Getter untuk menghitung total halaman
    public get totalPages(): number {
      return Math.ceil(this.filteredData.length / this.itemsPerPage);
    }


    // 3. Getter untuk mengambil data sesuai halaman saat ini
    public get paginatedData(): DataItem[] {
      console.log("Total Page", this.totalPages);
      console.log("Sekarang di Page", this.page);
      const startIndex = (this.page - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.filteredData.slice(startIndex, endIndex);
    }

    // --- EVENT HANDLER ---
    public onPageChange(newPage: number): void {
      this.page = newPage;

    }

}
