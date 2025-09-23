import { Component } from '@angular/core';
import { TableColumn } from '../../components/table-untitled/table-untitled.component';
import { ArticlesService, DataItem } from '../../services/articles.service';

@Component({
  selector: 'app-article',
  standalone: false,
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticlePage {
  public tableData: DataItem[] = [];

  constructor(private articleService: ArticlesService){}

  ngOnInit(): void{
    this.tableData = this.articleService.getAllArticles();
  }

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
