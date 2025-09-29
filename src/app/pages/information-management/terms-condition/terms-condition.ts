import { Component } from '@angular/core';
import { DataItem, TermsConditionService } from '../../../services/terms-condition.service';
import { TableColumn } from '../../../components/table-untitled/table-untitled.component';

@Component({
  selector: 'app-terms-condition',
  standalone: false,
  templateUrl: './terms-condition.html',
  styleUrl: './terms-condition.css'
})
export class TermsConditionPage {
  public tableData: DataItem[] = [];

  constructor(private termConditionService: TermsConditionService){}

  ngOnInit(): void{
    const singleItem = this.termConditionService.get();

    if(singleItem){
      this.tableData = [singleItem];
    }
  }

  tableCols: TableColumn[] = [
    {key: "label_name", label: 'Nama label', sortable: false },
    {key: "deskripsi", label: 'Deskripsi', sortable: false },
    {key: "updated_at", label: 'Tanggal Update', type:'date', sortable: false },
    {key: "approver", label: 'Approver', sortable: false },
    { key: "status_approval", label: 'Status Approval', type:'badge', sortable: false},
    { key: "is_visible", label: 'Status Fungsional', type:'badge', sortable: false},
    { key: "actions", label: 'Actions', isAction: true},
  ]
}
