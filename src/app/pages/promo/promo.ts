import { Component } from '@angular/core';
import { TableColumn } from '../../components/table-untitled/table-untitled.component';
import { PromoService, DataItem } from '../../services/promo.service';

@Component({
  selector: 'app-promo',
  standalone: false,
  templateUrl: './promo.html',
  styleUrl: './promo.css'
})
export class PromoPage {
  public page: number = 1;
  public query: string = ''; // State untuk menampung teks pencarian
  public itemsPerPage: number = 7;
  public tableData: DataItem[] = [];

  constructor(private promoService: PromoService){}

  disabled = false; // nggak usah @Input kalau ini internal

  ngOnInit(): void{
    this.tableData = this.promoService.getPromoData();
  }

  tableCols: TableColumn[] = [
    { key: 'title', label: 'Judul', sortable: true, customStyle: {width: "600px !important"} },
    { key: 'target', label: 'Target', sortable: true },
    { key: 'name', label: 'Nama', sortable: true },
    { key: 'periode', label: 'Periode', sortable: true },
    { key: 'approval', label: 'Approval', sortable: true },
    { key: 'update_date', label: 'Tanggal Update', sortable: true },
    { key: 'status_approval', label: 'Status Approval', type: 'badge', sortable: true },
    { key: 'status_fung', label: 'Status Fungsional', type: 'badge', sortable: true },
    { key: 'actions', label: 'Action', isAction: true }
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
        row.title.toLowerCase().includes(queryLower) ||
        row.target.toLowerCase().includes(queryLower) ||
        row.name.toLowerCase().includes(queryLower) ||
        row.periode.toLowerCase().includes(queryLower) ||
        row.approval.toLowerCase().includes(queryLower) ||
        row.update_date.toLowerCase().includes(queryLower) ||
        row.status_approval.toLowerCase().includes(queryLower) ||
        row.status_fung.toLowerCase().includes(queryLower)
    );
  }

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
