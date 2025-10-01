import { Component } from '@angular/core';
import { BaseTablePageComponent } from '../../base-table.page';
import { TableColumn } from '../../../components/table-untitled/table-untitled.component';
import { DataItem, ProductMasterService } from '../../../services/product-master.service';

@Component({
  selector: 'app-product-master',
  standalone: false,
  templateUrl: './product-master.html',
  styleUrl: './product-master.css'
})
export class ProductMasterPage extends BaseTablePageComponent<DataItem> {

  tableCols: TableColumn[] = [
    {key: 'product_name', label: 'Nama Produk', sortable: true},
    {key: 'product_description', label: 'Deskripsi', sortable: true},
    {key: 'created_at', label: 'Tanggal Pembuatan', type: 'date', sortable: true},
    {key: 'created_by', label: 'Created by', sortable: true},
    {key: 'updated_by', label: 'Updated by', sortable: true},
    {key: 'status_approval', label: 'Status Approval', type:'badge', sortable: true },
    {key: 'is_visible', label: 'Status Fungsional', type: 'badge', sortable: true},
    {key: 'actions', label: 'Actions', isAction: true}
  ];

  override filterableKeys: (keyof DataItem)[] = [
    'product_name', 'product_description', 'created_at', 'created_by', 'updated_by', 'status_approval', 'is_visible'
  ]

  constructor(private productMasterService: ProductMasterService){
    super();
  }

  override ngOnInit(): void {
      this.allData = this.productMasterService.getAllProductMasterData();
      this.tableData = [...this.allData];
  }

}
