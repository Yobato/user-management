import { Component } from '@angular/core';
import { DataItem, FaqService } from '../../../services/faq.service';
import { TableColumn } from '../../../components/table-untitled/table-untitled.component';
import { BaseTablePageComponent } from '../../base-table.page';

@Component({
  selector: 'app-faq',
  standalone: false,
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqPage extends BaseTablePageComponent<DataItem> {

  tableCols: TableColumn[] = [
    {key: 'question', label: 'Pertanyaan', sortable: true},
    {key: 'answer', label: 'Jawaban', sortable: true},
    {key: 'kategori', label:'Kategori Produk', sortable:true},
    {key: 'approver', label: 'Approver', sortable: true},
    {key: 'updated_at', label: 'Tanggal Update', type: 'date', sortable: true},
    {key: 'status_approval', label: 'Status Approval', type:'badge', sortable: true },
    {key: 'visibility', label: 'Status Fungsional', type: 'badge', sortable: true},
    {key: 'actions', label: 'Actions', isAction: true}
  ];

  override filterableKeys: (keyof DataItem)[] = [
    'question', 'answer', 'kategori', 'approver', 'updated_at', 'status_approval', 'visibility'
  ]

  constructor(private faqService: FaqService){
    super();
  }

  override ngOnInit(): void {
      this.allData = this.faqService.getAllFaq();
      this.tableData = [...this.allData];
  }

}
