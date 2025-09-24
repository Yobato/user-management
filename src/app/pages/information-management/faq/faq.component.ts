import { Component } from '@angular/core';
import { DataItem, FaqService } from '../../../services/faq.service';
import { TableColumn } from '../../../components/table-untitled/table-untitled.component';

@Component({
  selector: 'app-faq',
  standalone: false,
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqPage {
  public tableData: DataItem[] = [];

  constructor(
    private faqService: FaqService
  ){}

  ngOnInit(): void{
    this.tableData = this.faqService.getAllFaq();
  }

  // Pagination
  public page: number = 1;
  public query: string = '';
  public itemsPerPage: number = 6;

  disabled = false;

  tableCols: TableColumn[] = [
    {key: 'question', label: 'Pertanyaan', sortable: true},
    {key: 'answer', label: 'Jawaban', sortable: true},
    {key: 'kategori', label:'Kategori Produk', sortable:true},
    {key: 'approver', label: 'Approver', sortable: true},
    {key: 'updated_at', label: 'Tanggal Update', type: 'date', sortable: true},
    {key: 'status_approval', label: 'Status Approval', type:'badge', sortable: true },
    {key: 'visibility', label: 'Status Fungsional', type: 'badge', sortable: true},
    {key: 'actions', label: 'Actions', isAction: true}
  ]

  onSortChange(e: { key: string; direction: 'asc' | 'desc' }) {
    const key = e.key as keyof DataItem;
    const directionMultiplier = e.direction === 'asc' ? 1 : -1;

    this.tableData = [...this.tableData].sort((a, b) => {
      const valA = a[key];
      const valB = b[key];

      // Tangani nilai null atau undefined terlebih dahulu
      if (valA == null && valB == null) return 0;
      if (valA == null) return -1 * directionMultiplier;
      if (valB == null) return 1 * directionMultiplier;

      // --- LOGIKA BARU UNTUK TIPE DATA BERBEDA ---
      // Jika datanya adalah object Date, bandingkan timestamp-nya
      if (valA instanceof Date && valB instanceof Date) {
        if (valA.getTime() < valB.getTime()) return -1 * directionMultiplier;
        if (valA.getTime() > valB.getTime()) return 1 * directionMultiplier;
        return 0;
      }

      // Jika datanya adalah boolean, konversi ke angka (true=1, false=0)
      if (typeof valA === 'boolean' && typeof valB === 'boolean') {
        if (valA < valB) return -1 * directionMultiplier;
        if (valA > valB) return 1 * directionMultiplier;
        return 0;
      }
      // --- AKHIR LOGIKA BARU ---

      // Fallback untuk string dan number
      if (valA < valB) {
        return -1 * directionMultiplier;
      }
      if (valA > valB) {
        return 1 * directionMultiplier;
      }
      return 0;
      }
    );
  }

  public get filteredData(): DataItem[] {
    if (!this.query) {
      return this.tableData;
    }
    const queryLower = this.query.toLowerCase();

    return this.tableData.filter(
      (row) =>
        row.question.toLowerCase().includes(queryLower) ||
        row.answer.toLowerCase().includes(queryLower) ||
        row.kategori.toLowerCase().includes(queryLower) ||
        row.reason.toLowerCase().includes(queryLower) ||
        row.updated_at.toLocaleDateString('id-ID').toLowerCase().includes(queryLower) ||
        String(row.visibility).toLowerCase().includes(queryLower) ||
        row.status_approval.toLowerCase().includes(queryLower)
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
