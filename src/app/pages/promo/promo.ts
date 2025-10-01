import { Component } from '@angular/core';
import { TableColumn } from '../../components/table-untitled/table-untitled.component';
import { PromoService, DataItem } from '../../services/promo.service';
import { BaseTablePageComponent } from '../base-table.page';

@Component({
  selector: 'app-promo',
  standalone: false,
  templateUrl: './promo.html',
  styleUrl: './promo.css'
})

export class PromoPage extends BaseTablePageComponent<DataItem> {

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

  override filterableKeys: (keyof DataItem)[] = [
    'title', 'target', 'name', 'periode', 'approval', 'update_date', 'status_approval', 'status_fung',
  ];

  constructor(private promoService: PromoService){
    super();
  }

  override ngOnInit(): void{
    this.tableData = this.promoService.getPromoData();
  }
}
