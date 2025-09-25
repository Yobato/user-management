import { Component } from '@angular/core';
import { TableColumn } from '../../components/table-untitled/table-untitled.component';
import { DataItem, ProdukService } from '../../services/produk.service';
import { BaseTablePageComponent } from '../base-table.page';

@Component({
  selector: 'app-produk',
  standalone: false,
  templateUrl: './produk.html',
  styleUrl: './produk.css'
})
export class ProdukPage extends BaseTablePageComponent<DataItem> {

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

    override filterableKeys: (keyof DataItem)[] = [
      'nama_produk', 'jenis_produk', 'kategori', 'detail', 'uploader', 'approver', 'update_date', 'produk_image', 'status_approval', 'status_fung', 'highlight'
    ];

    constructor(private produkService: ProdukService){
      super();
    }

    override ngOnInit(): void {
        this.allData = this.produkService.getAllProducts();
        this.tableData = [...this.allData];
    }



}
