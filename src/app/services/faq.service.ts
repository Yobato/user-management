import { Injectable } from '@angular/core';

export interface DataItem {
  id: number;
  question: string;
  answer: string;
  kategori: string;
  visibility: boolean;
  status_approval: string;
  approver: string;
  reason: string;
  updated_at: Date;
}

@Injectable({
  providedIn: 'root'
})
export class FaqService {

  faqData: DataItem[] = [
  // Kategori: Akad & Prinsip Syariah
    {
      id: 1,
      question: "Apa itu Akad Murabahah dalam KPR BSI Griya?",
      answer: "Akad Murabahah adalah akad jual beli di mana bank membeli rumah yang Anda inginkan dan menjualnya kembali kepada Anda dengan tambahan margin keuntungan yang disepakati di awal. Angsuran Anda akan tetap hingga akhir pembiayaan.",
      kategori: "Akad & Prinsip Syariah",
      visibility: true,
      status_approval: "Approved",
      approver: "Admin Utama",
      reason: "Konten sudah diverifikasi oleh tim syariah.",
      updated_at: new Date("2025-09-20T10:00:00")
    },
    {
      id: 2,
      question: "Apakah KPR di BSI bebas dari Riba?",
      answer: "Ya, semua produk pembiayaan di BSI, termasuk BSI Griya, dirancang sesuai prinsip syariah yang bebas dari unsur bunga (riba), ketidakpastian (gharar), dan spekulasi (maysir).",
      kategori: "Akad & Prinsip Syariah",
      visibility: true,
      status_approval: "Approved",
      approver: "Admin Utama",
      reason: "Informasi akurat dan jelas.",
      updated_at: new Date("2025-09-19T11:00:00")
    },

    // Kategori: Proses Pengajuan
    {
      id: 3,
      question: "Berapa lama proses persetujuan KPR BSI Griya?",
      answer: "Proses persetujuan biasanya memakan waktu 7-14 hari kerja setelah semua dokumen persyaratan diterima secara lengkap oleh pihak bank.",
      kategori: "Proses Pengajuan",
      visibility: true,
      status_approval: "Approved",
      approver: "Admin Utama",
      reason: "Sesuai SLA internal.",
      updated_at: new Date("2025-09-18T14:30:00")
    },
    {
      id: 4,
      question: "Dokumen apa saja yang diperlukan untuk pengajuan?",
      answer: "Dokumen utama yang dibutuhkan antara lain fotokopi KTP, Kartu Keluarga, NPWP, slip gaji atau surat keterangan penghasilan, dan dokumen legalitas properti (SHM/HGB).",
      kategori: "Proses Pengajuan",
      visibility: true,
      status_approval: "Approved",
      approver: "Admin Utama",
      reason: "Lengkap dan informatif.",
      updated_at: new Date("2025-09-17T16:00:00")
    },
    {
      id: 5,
      question: "Apakah saya bisa mengajukan KPR jika saya seorang wiraswasta?",
      answer: "Tentu saja. Bagi wiraswasta, dokumen penghasilan seperti slip gaji dapat digantikan dengan laporan keuangan usaha, rekening koran, dan dokumen legalitas usaha.",
      kategori: "Proses Pengajuan",
      visibility: false,
      status_approval: "Pending",
      approver: "Admin Utama",
      reason: "Menunggu approval dari tim produk.",
      updated_at: new Date("2025-09-22T09:00:00")
    },

    // Kategori: Produk & Skema
    {
      id: 6,
      question: "Apa itu BSI Griya SiMuda?",
      answer: "BSI Griya SiMuda adalah produk pembiayaan kepemilikan rumah yang dirancang khusus untuk generasi milenial dengan berbagai kemudahan, seperti DP ringan dan tenor yang lebih panjang.",
      kategori: "Produk & Skema",
      visibility: true,
      status_approval: "Approved",
      approver: "Admin Utama",
      reason: "Deskripsi produk akurat.",
      updated_at: new Date("2025-08-10T08:00:00")
    },
    {
      id: 7,
      question: "Bisakah saya menggunakan KPR BSI untuk membeli rumah bekas (second)?",
      answer: "Ya, pembiayaan BSI Griya dapat digunakan untuk membeli properti baru dari developer maupun properti bekas (second) dari perorangan.",
      kategori: "Produk & Skema",
      visibility: true,
      status_approval: "Approved",
      approver: "Admin Utama",
      reason: "Informasi sudah valid.",
      updated_at: new Date("2025-08-05T13:00:00")
    },

    // Kategori: Biaya & Angsuran
    {
      id: 8,
      question: "Apakah angsuran saya akan naik jika suku bunga pasar naik?",
      answer: "Tidak. Salah satu keunggulan KPR syariah dengan akad Murabahah adalah jumlah angsuran bersifat tetap (fixed) selama tenor pembiayaan, tidak terpengaruh fluktuasi suku bunga.",
      kategori: "Biaya & Angsuran",
      visibility: true,
      status_approval: "Approved",
      approver: "Admin Utama",
      reason: "OK.",
      updated_at: new Date("2025-07-28T17:00:00")
    },
    {
      id: 9,
      question: "Apakah ada biaya penalti jika saya melunasi KPR lebih cepat?",
      answer: "Sesuai prinsip syariah, BSI Griya tidak mengenakan biaya penalti untuk pelunasan dipercepat. Nasabah hanya perlu melunasi sisa pokok pembiayaan.",
      kategori: "Biaya & Angsuran",
      visibility: true,
      status_approval: "Approved",
      approver: "Admin Utama",
      reason: "Sesuai kebijakan.",
      updated_at: new Date("2025-07-25T10:00:00")
    },
    {
      id: 10,
      question: "Biaya apa saja yang perlu saya siapkan di awal?",
      answer: "Biaya awal umumnya meliputi Uang Muka (DP), biaya administrasi, biaya notaris (AJB, BBN), dan biaya asuransi (jiwa dan kebakaran).",
      kategori: "Biaya & Angsuran",
      visibility: false,
      status_approval: "Sendback",
      approver: "Admin Utama",
      reason: "Perlu ditambahkan detail tentang biaya materai dan APHT.",
      updated_at: new Date("2025-09-21T15:00:00")
    },

    // Kategori Tambahan
    {
      id: 11,
      question: "Apa yang terjadi jika saya telat membayar angsuran?",
      answer: "Jika terjadi keterlambatan, nasabah akan dikenakan denda (ta'zir) yang besarnya sesuai ketentuan. Dana denda ini akan disalurkan sebagai dana sosial, bukan menjadi pendapatan bank.",
      kategori: "Akad & Prinsip Syariah",
      visibility: true,
      status_approval: "Approved",
      approver: "Admin Utama",
      reason: "Penjelasan denda sudah benar.",
      updated_at: new Date("2025-06-30T12:00:00")
    },
    {
      id: 12,
      question: "Bagaimana cara mengecek sisa angsuran saya?",
      answer: "Anda dapat mengecek sisa angsuran dan riwayat pembayaran melalui aplikasi BSI Mobile Banking atau dengan mengunjungi cabang BSI terdekat.",
      kategori: "Proses Pengajuan",
      visibility: true,
      status_approval: "Approved",
      approver: "Admin Utama",
      reason: "OK",
      updated_at: new Date("2025-06-15T11:00:00")
    },
    {
      id: 13,
      question: "Apakah properti yang dibiayai harus bersertifikat SHM?",
      answer: "Properti bisa bersertifikat Hak Milik (SHM) atau Hak Guna Bangunan (HGB). Bank akan melakukan appraisal untuk menilai kelayakan properti tersebut.",
      kategori: "Produk & Skema",
      visibility: true,
      status_approval: "Approved",
      approver: "Admin Utama",
      reason: "Jelas dan akurat.",
      updated_at: new Date("2025-06-10T16:00:00")
    },
    {
      id: 14,
      question: "Definisi 'Rumah Tapak' itu apa?",
      answer: "Rumah Tapak adalah jenis hunian yang dibangun langsung di atas permukaan tanah, bukan bagian dari bangunan vertikal seperti apartemen atau rusun.",
      kategori: "Produk & Skema",
      visibility: false,
      status_approval: "Rejected",
      approver: "Admin Utama",
      reason: "Pertanyaan ini terlalu umum dan tidak spesifik ke produk BSI.",
      updated_at: new Date("2025-09-23T10:00:00")
    },
    {
      id: 15,
      question: "Apakah plafon pembiayaan bisa 100% dari harga rumah?",
      answer: "Besaran plafon pembiayaan maksimal yang dapat diberikan akan bergantung pada hasil analisis kemampuan membayar (RPC) nasabah dan rasio pembiayaan terhadap aset (FTV) yang diatur oleh regulator.",
      kategori: "Biaya & Angsuran",
      visibility: true,
      status_approval: "Approved",
      approver: "Admin Utama",
      reason: "OK.",
      updated_at: new Date("2025-05-20T14:00:00")
    },
  ];

  getById(id: number): DataItem | undefined{
    return this.faqData.find(item => item.id === id);
  }

  create(data: Partial<DataItem>): void { /* ... */ }

  update(id: number, data: Partial<DataItem>): void { /* ... */ }

  getAllFaq(): DataItem[]{
    return this.faqData
  }


}
