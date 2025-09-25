// import { Component } from '@angular/core';
// import { DataItem, FaqService } from '../../../services/faq.service';
// import { TableColumn } from '../../../components/table-untitled/table-untitled.component';

// @Component({
//   selector: 'app-faq',
//   standalone: false,
//   templateUrl: './faq.component.html',
//   styleUrl: './faq.component.css'
// })
// export class FaqPage {
//   public tableData: DataItem[] = [];

//   constructor(
//     private faqService: FaqService
//   ){}

//   ngOnInit(): void{
//     this.tableData = this.faqService.getAllFaq();
//   }

//   // Pagination
//   public page: number = 1;
//   public query: string = '';
//   public itemsPerPage: number = 6;

//   disabled = false;

//   tableCols: TableColumn[] = [
//     {key: 'question', label: 'Pertanyaan', sortable: true},
//     {key: 'answer', label: 'Jawaban', sortable: true},
//     {key: 'kategori', label:'Kategori Produk', sortable:true},
//     {key: 'approver', label: 'Approver', sortable: true},
//     {key: 'updated_at', label: 'Tanggal Update', type: 'date', sortable: true},
//     {key: 'status_approval', label: 'Status Approval', type:'badge', sortable: true },
//     {key: 'visibility', label: 'Status Fungsional', type: 'badge', sortable: true},
//     {key: 'actions', label: 'Actions', isAction: true}
//   ]

//   onSortChange(e: { key: string; direction: 'asc' | 'desc' }) {
//     const key = e.key as keyof DataItem;
//     const directionMultiplier = e.direction === 'asc' ? 1 : -1;

//     this.tableData = [...this.tableData].sort((a, b) => {
//       const valA = a[key];
//       const valB = b[key];

//       // Tangani nilai null atau undefined terlebih dahulu
//       if (valA == null && valB == null) return 0;
//       if (valA == null) return -1 * directionMultiplier;
//       if (valB == null) return 1 * directionMultiplier;

//       // --- LOGIKA BARU UNTUK TIPE DATA BERBEDA ---
//       // Jika datanya adalah object Date, bandingkan timestamp-nya
//       if (valA instanceof Date && valB instanceof Date) {
//         if (valA.getTime() < valB.getTime()) return -1 * directionMultiplier;
//         if (valA.getTime() > valB.getTime()) return 1 * directionMultiplier;
//         return 0;
//       }

//       // Jika datanya adalah boolean, konversi ke angka (true=1, false=0)
//       if (typeof valA === 'boolean' && typeof valB === 'boolean') {
//         if (valA < valB) return -1 * directionMultiplier;
//         if (valA > valB) return 1 * directionMultiplier;
//         return 0;
//       }
//       // --- AKHIR LOGIKA BARU ---

//       // Fallback untuk string dan number
//       if (valA < valB) {
//         return -1 * directionMultiplier;
//       }
//       if (valA > valB) {
//         return 1 * directionMultiplier;
//       }
//       return 0;
//       }
//     );
//   }

//   public get filteredData(): DataItem[] {
//     if (!this.query) {
//       return this.tableData;
//     }
//     const queryLower = this.query.toLowerCase();

//     return this.tableData.filter(
//       (row) =>
//         row.question.toLowerCase().includes(queryLower) ||
//         row.answer.toLowerCase().includes(queryLower) ||
//         row.kategori.toLowerCase().includes(queryLower) ||
//         row.reason.toLowerCase().includes(queryLower) ||
//         row.updated_at.toLocaleDateString('id-ID').toLowerCase().includes(queryLower) ||
//         String(row.visibility).toLowerCase().includes(queryLower) ||
//         row.status_approval.toLowerCase().includes(queryLower)
//     );
//   }

//   // 2. Getter untuk menghitung total halaman
//   public get totalPages(): number {
//     return Math.ceil(this.filteredData.length / this.itemsPerPage);
//   }


//   // 3. Getter untuk mengambil data sesuai halaman saat ini
//   public get paginatedData(): DataItem[] {
//     console.log("Total Page", this.totalPages);
//     console.log("Sekarang di Page", this.page);
//     const startIndex = (this.page - 1) * this.itemsPerPage;
//     const endIndex = startIndex + this.itemsPerPage;
//     return this.filteredData.slice(startIndex, endIndex);
//   }

//   // --- EVENT HANDLER ---
//   public onPageChange(newPage: number): void {
//     this.page = newPage;

//   }

// }


// ==================== ARTIKEL ===================================================


// import { Component } from '@angular/core';
// import { TableColumn } from '../../components/table-untitled/table-untitled.component';
// import { ArticlesService, DataItem } from '../../services/articles.service';

// @Component({
//   selector: 'app-article',
//   standalone: false,
//   templateUrl: './article.component.html',
//   styleUrl: './article.component.css'
// })
// export class ArticlePage {
//   public tableData: DataItem[] = [];

//   constructor(private articleService: ArticlesService){}

//   ngOnInit(): void{
//     this.tableData = this.articleService.getAllArticles();
//   }

//     public page: number = 1;
//     public query: string = ''; // State untuk menampung teks pencarian
//     public itemsPerPage: number = 7;

//     disabled = false; // nggak usah @Input kalau ini internal

//     // component.ts
//     tableCols: TableColumn[] = [
//       { key: 'judul', label: 'Judul', sortable: true, customStyle: {width: "600px !important"} },
//       { key: 'deskripsi', label: 'Deskripsi', sortable: true },
//       { key: 'kategori', label: 'Kategori', sortable: true },
//       { key: 'approver', label: 'Approver', sortable: true },
//       { key: 'update_date', label: 'Update Date', sortable: true },
//       { key: 'highlight', label: 'Highlight', type: 'badge', sortable: true },
//       { key: 'status_approval', label: 'Status', type: 'badge', sortable: true },
//       { key: 'status_fung', label: 'Fungsi', type: 'badge', sortable: true },
//       { key: 'actions', label: 'Actions', isAction: true }
//     ];

//     onSortChange(e: { key: string; direction: 'asc' | 'desc' }) {
//       // Buat array baru dari this.tableData, lalu urutkan
//       this.tableData = [...this.tableData].sort((a, b) => {
//         const key = e.key as keyof DataItem;
//         if (a[key] < b[key]) return e.direction === 'asc' ? -1 : 1;
//         if (a[key] > b[key]) return e.direction === 'asc' ? 1 : -1;
//         return 0;
//       });
//     }

//      public get filteredData(): DataItem[] {
//       if (!this.query) {
//         return this.tableData;
//       }
//       const queryLower = this.query.toLowerCase();
//       return this.tableData.filter(
//         (row) =>
//           row.judul.toLowerCase().includes(queryLower) ||
//           row.deskripsi.toLowerCase().includes(queryLower) ||
//           row.kategori.toLowerCase().includes(queryLower) ||
//           row.approver.toLowerCase().includes(queryLower) ||
//           row.update_date.toLowerCase().includes(queryLower) ||
//           // row.highlight.toLowerCase().includes(queryLower) ||
//           row.status_approval.toLowerCase().includes(queryLower) ||
//           row.status_fung.toLowerCase().includes(queryLower)
//       );
//     }

//     // 2. Getter untuk menghitung total halaman
//     public get totalPages(): number {
//       return Math.ceil(this.filteredData.length / this.itemsPerPage);
//     }


//     // 3. Getter untuk mengambil data sesuai halaman saat ini
//     public get paginatedData(): DataItem[] {
//       console.log("Total Page", this.totalPages);
//       console.log("Sekarang di Page", this.page);
//       const startIndex = (this.page - 1) * this.itemsPerPage;
//       const endIndex = startIndex + this.itemsPerPage;
//       return this.filteredData.slice(startIndex, endIndex);
//     }

//     // --- EVENT HANDLER ---
//     public onPageChange(newPage: number): void {
//       this.page = newPage;

//     }

// }





// =========== PRODUK =========================================================

// import { Component } from '@angular/core';
// import { TableColumn } from '../../components/table-untitled/table-untitled.component';
// import { DataItem, ProdukService } from '../../services/produk.service';

// @Component({
//   selector: 'app-produk',
//   standalone: false,
//   templateUrl: './produk.html',
//   styleUrl: './produk.css'
// })
// export class ProdukPage {public page: number = 1;
//     public tableData: DataItem[] = [];

//     constructor(private productService: ProdukService){}
//     ngOnInit(): void{
//       this.tableData = this.productService.getAllProducts();
//     }

//     public query: string = ''; // State untuk menampung teks pencarian
//     public itemsPerPage: number = 7;

//     disabled = false; // nggak usah @Input kalau ini internal

//     // component.ts
//     tableCols: TableColumn[] = [
//       { key: 'nama_produk', label: 'Nama Produk', sortable: true },
//       { key: 'jenis_produk', label: 'Jenis', sortable: true },
//       { key: 'kategori', label: 'Kategori', sortable: true },
//       { key: 'detail', label: 'Detail', sortable: true },
//       { key: 'uploader', label: 'Pengunggah', sortable: true },
//       { key: 'approver', label: 'Approver', sortable: true },
//       { key: 'update_date', label: 'Tanggal Update', sortable: true },
//       { key: 'produk_image', label: 'Image', sortable: false, type: 'image' },
//       { key: 'status_approval', label: 'Status', type: 'badge', sortable: true },
//       { key: 'status_fung', label: 'Fungsi', type: 'badge', sortable: true },
//       { key: 'highlight', label: 'Highlight', sortable: true },
//       { key: 'actions', label: 'Actions', isAction: true }
//     ];

//     onSortChange(e: { key: string; direction: 'asc' | 'desc' }) {
//       const key = e.key as keyof DataItem;
//       // Simpan arah sorting dalam variabel agar lebih bersih
//       const directionMultiplier = e.direction === 'asc' ? 1 : -1;

//       this.tableData = [...this.tableData].sort((a, b) => {
//         const valA = a[key];
//         const valB = b[key];

//         // --- BAGIAN BARU: Tangani nilai null atau undefined ---
//         // Jika keduanya kosong, anggap sama
//         if (valA == null && valB == null) return 0;
//         // Jika hanya A yang kosong, taruh A di paling atas (saat asc)
//         if (valA == null) return -1 * directionMultiplier;
//         // Jika hanya B yang kosong, taruh B di paling atas (saat asc)
//         if (valB == null) return 1 * directionMultiplier;
//         // --------------------------------------------------

//         // Lanjutkan perbandingan jika kedua nilai ada
//         if (valA < valB) {
//           return -1 * directionMultiplier;
//         }
//         if (valA > valB) {
//           return 1 * directionMultiplier;
//         }
//         return 0;
//       });
//     }

//     public get filteredData(): DataItem[] {
//       if (!this.query) {
//         return this.tableData;
//       }
//       const queryLower = this.query.toLowerCase();
//       return this.tableData.filter(
//         (row) =>
//           row.kategori.toLowerCase().includes(queryLower) ||
//           row.detail.toLowerCase().includes(queryLower) ||
//           row.uploader.toLowerCase().includes(queryLower) ||
//           row.approver.toLowerCase().includes(queryLower) ||
//           row.update_date.toLowerCase().includes(queryLower) ||
//           // row.highlight.toLowerCase().includes(queryLower) ||
//           row.status_approval.toLowerCase().includes(queryLower) ||
//           row.status_fung.toLowerCase().includes(queryLower)
//       );
//     }

//   // 2. Getter untuk menghitung total halaman
//   public get totalPages(): number {
//     return Math.ceil(this.filteredData.length / this.itemsPerPage);
//   }


//   // 3. Getter untuk mengambil data sesuai halaman saat ini
//   public get paginatedData(): DataItem[] {
//     console.log("Total Page", this.totalPages);
//     console.log("Sekarang di Page", this.page);
//     const startIndex = (this.page - 1) * this.itemsPerPage;
//     const endIndex = startIndex + this.itemsPerPage;
//     return this.filteredData.slice(startIndex, endIndex);
//   }

//   // --- EVENT HANDLER ---
//   public onPageChange(newPage: number): void {
//     this.page = newPage;

//   }



// }

