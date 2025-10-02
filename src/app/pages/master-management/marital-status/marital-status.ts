import { Component } from '@angular/core';
import { BaseTablePageComponent } from '../../base-table.page';
import { DataItem, MaritalStatusService } from '../../../services/marital-status.service';
import { TableColumn } from '../../../components/table-untitled/table-untitled.component';

@Component({
  selector: 'app-marital-status',
  standalone: false,
  templateUrl: './marital-status.html',
  styleUrl: './marital-status.css'
})
export class MaritalStatusPage extends BaseTablePageComponent<DataItem> {

  tableCols: TableColumn[] = [
    {key: 'kode_marital_status', label: 'Kode', sortable: true},
    {key: 'nama_marital_status', label: 'Jenis Marital Status', sortable: true},
    {key: 'created_by', label: 'Created by', sortable: true},
    {key: 'updated_by', label: 'Updated by', sortable: true},
    {key: 'status_approval', label: 'Status Approval', type:'badge', sortable: true },
    {key: 'is_visible', label: 'Status Fungsional', type: 'badge', sortable: true},
    {key: 'actions', label: 'Actions', isAction: true}
  ];

  override filterableKeys: (keyof DataItem)[] = [
    'kode_marital_status', 'nama_marital_status', 'created_by', 'updated_by', 'status_approval', 'is_visible'
  ];

  constructor(private maritalStatusService: MaritalStatusService){
    super();
  }

  override ngOnInit(): void {
    this.allData = this.maritalStatusService.getAllMaritalStatusData();
    this.tableData = [...this.allData];
  }
}
