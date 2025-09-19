import { Component } from '@angular/core';
import { TableColumn } from '../../components/table-untitled/table-untitled.component';
import { DataItem, ProdukService } from '../../services/produk.service';

@Component({
  selector: 'app-produk',
  standalone: false,
  templateUrl: './produk.html',
  styleUrl: './produk.css'
})
export class ProdukPage {public page: number = 1;
    public tableData: DataItem[] = [];

    constructor(private productService: ProdukService){}
    ngOnInit(): void{
      this.tableData = this.productService.getAllProducts();
    }

    public query: string = ''; // State untuk menampung teks pencarian
    public itemsPerPage: number = 7;

    disabled = false; // nggak usah @Input kalau ini internal

    // component.ts
    tableCols: TableColumn[] = [
      { key: 'nama_produk', label: 'Nama Produk', sortable: true },
      { key: 'jenis_produk', label: 'Jenis', sortable: true },
      { key: 'kategori', label: 'Kategori', sortable: true },
      { key: 'detail', label: 'Detail', sortable: true },
      { key: 'uploader', label: 'Pengunggah', sortable: true },
      { key: 'approver', label: 'Approver', sortable: true },
      { key: 'update_date', label: 'Tanggal Update', sortable: true },
      { key: 'produk_image', label: 'Image', sortable: false, type: 'image' },
      { key: 'status_approval', label: 'Status', type: 'badge', sortable: true },
      { key: 'status_fung', label: 'Fungsi', type: 'badge', sortable: true },
      { key: 'highlight', label: 'Highlight', sortable: true },
      { key: 'actions', label: 'Actions', isAction: true }
    ];

    onSortChange(e: { key: string; direction: 'asc' | 'desc' }) {
      const key = e.key as keyof DataItem;
      // Simpan arah sorting dalam variabel agar lebih bersih
      const directionMultiplier = e.direction === 'asc' ? 1 : -1;

      this.tableData = [...this.tableData].sort((a, b) => {
        const valA = a[key];
        const valB = b[key];

        // --- BAGIAN BARU: Tangani nilai null atau undefined ---
        // Jika keduanya kosong, anggap sama
        if (valA == null && valB == null) return 0;
        // Jika hanya A yang kosong, taruh A di paling atas (saat asc)
        if (valA == null) return -1 * directionMultiplier;
        // Jika hanya B yang kosong, taruh B di paling atas (saat asc)
        if (valB == null) return 1 * directionMultiplier;
        // --------------------------------------------------

        // Lanjutkan perbandingan jika kedua nilai ada
        if (valA < valB) {
          return -1 * directionMultiplier;
        }
        if (valA > valB) {
          return 1 * directionMultiplier;
        }
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
          row.kategori.toLowerCase().includes(queryLower) ||
          row.detail.toLowerCase().includes(queryLower) ||
          row.uploader.toLowerCase().includes(queryLower) ||
          row.approver.toLowerCase().includes(queryLower) ||
          row.update_date.toLowerCase().includes(queryLower) ||
          // row.highlight.toLowerCase().includes(queryLower) ||
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
