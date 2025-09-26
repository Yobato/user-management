import { Component } from '@angular/core';
import { BaseTablePageComponent } from '../../base-table.page';
import { DataItem, PdpConsentService } from '../../../services/pdp-consent.service';
import { TableColumn } from '../../../components/table-untitled/table-untitled.component';

@Component({
  selector: 'app-pdp-consent',
  standalone: false,
  templateUrl: './pdp-consent.component.html',
  styleUrl: './pdp-consent.component.css'
})
export class PdpConsentPage extends BaseTablePageComponent<DataItem> {

  tableCols: TableColumn[] = [
    {key: 'detail', label: 'Detail', sortable: true},
    {key: 'is_mandatory', label: 'Type Latter', sortable: true},
    {key: 'approver', label: 'Approver', sortable: true},
    {key: 'updated_at', label: 'Tanggal Update', sortable: true, type:'date'},
    {key: 'status_approval', label: 'Status Approval', sortable: true, type:'badge'},
    {key: 'is_visible', label: 'Status Fungsional', sortable: true, type:'badge'},
    {key: 'action', label: 'Action', sortable: false, isAction: true},
  ];

  override filterableKeys: (keyof DataItem)[] = [
    'detail', 'is_mandatory', 'approver', 'updated_at', 'status_approval', 'is_visible'
  ]

  constructor(private pdpConsentService: PdpConsentService){
    super();
  }

  override ngOnInit(): void {
      this.allData = this.pdpConsentService.getAllPdpConsent();
      this.tableData = [...this.allData];
  }

}
