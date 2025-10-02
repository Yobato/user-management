import { Component } from '@angular/core';
import { BaseTablePageComponent } from '../../base-table.page';
import { TableColumn } from '../../../components/table-untitled/table-untitled.component';
import { DataItem, ProductCategoryService } from '../../../services/product-category.service';

@Component({
  selector: 'app-product-category',
  standalone: false,
  templateUrl: './product-category.html',
  styleUrl: './product-category.css'
})
export class ProductCategoryPage extends BaseTablePageComponent<DataItem> {

  tableCols: TableColumn[] = [
      {key: 'product_master_name.product_name', label: 'Tipe Produk', sortable: true},
      {key: 'product_category_name', label: 'Nama Kategori Produk', sortable: true},
      {key: 'product_category_description', label: 'Deskripsi', sortable: true},
      {key: 'created_at', label: 'Tanggal Pembuatan', type: 'date', sortable: true},
      {key: 'created_by', label: 'Created by', sortable: true},
      {key: 'updated_by', label: 'Updated by', sortable: true},
      {key: 'status_approval', label: 'Status Approval', type:'badge', sortable: true },
      {key: 'is_visible', label: 'Status Fungsional', type: 'badge', sortable: true},
      {key: 'actions', label: 'Actions', isAction: true}
    ];

    override filterableKeys: (keyof DataItem)[] = [
      'product_master_name', 'product_category_name', 'product_category_description', 'created_at', 'created_by', 'updated_by', 'status_approval', 'is_visible'
    ]

    constructor(private productCategoryService: ProductCategoryService){
      super();
    }

    override ngOnInit(): void {
        this.allData = this.productCategoryService.getAllProductCategoryData();
        this.tableData = [...this.allData];
    }


}
