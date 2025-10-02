import { Component } from '@angular/core';
import { BaseTablePageComponent } from '../../base-table.page';
import { DataItem, PricingService } from '../../../services/pricing.service';
import { TableColumn } from '../../../components/table-untitled/table-untitled.component';

@Component({
  selector: 'app-pricing',
  standalone: false,
  templateUrl: './pricing.html',
  styleUrl: './pricing.css'
})
export class PricingPage extends BaseTablePageComponent<DataItem>  {

  tableCols: TableColumn[] = [
    {key: 'pricing_option.product_name', label: 'Opsi Pricing', sortable: true},
    {key: 'pricing_code', label: 'Kode Pricing', sortable: true},
    {key: 'pricing_name', label: 'Nama Pricing', sortable: true},
    {key: 'created_at', label: 'Tanggal Pembuatan', type: 'date', sortable: true},
    {key: 'created_by', label: 'Created by', sortable: true},
    {key: 'updated_by', label: 'Updated by', sortable: true},
    {key: 'status_approval', label: 'Status Approval', type:'badge', sortable: true },
    {key: 'is_visible', label: 'Status Fungsional', type: 'badge', sortable: true},
    {key: 'actions', label: 'Actions', isAction: true}
  ];

  override filterableKeys: (keyof DataItem)[] = [
    'pricing_option', 'pricing_code', 'pricing_name', 'created_at', 'created_by', 'updated_by', 'status_approval', 'is_visible'
  ];

  constructor(private pricingService: PricingService){
    super();
  }

  override ngOnInit(): void {
      this.allData = this.pricingService.getAllPricingData();
      this.tableData = [...this.allData];
  }
}
