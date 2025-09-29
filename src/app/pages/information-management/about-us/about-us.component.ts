import { Component } from '@angular/core';
import { AboutUsService, DataItem } from '../../../services/about-us.service';
import { TableColumn } from '../../../components/table-untitled/table-untitled.component';

@Component({
  selector: 'app-about-us',
  standalone: false,
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsPage {
  public tableData: DataItem[] = [];

  constructor(private aboutUsService: AboutUsService){}

  ngOnInit(): void{
    const singleItem = this.aboutUsService.get();

    if(singleItem){
      this.tableData = [singleItem];
    }
  }

  tableCols: TableColumn[] = [
    { key: "label_name", label: 'Nama Label', sortable: false },
    { key: "deskripsi", label: 'Deskripsi', sortable: false  },
    { key: "visi", label: 'Visi', sortable: false},
    { key: "misi", label: 'Misi', sortable: false},
    { key: "updated_at", label: 'Tanggal Update', type:'date', sortable: false},
    { key: "updated_by", label: 'Updated By', sortable: false},
    { key: "status_approval", label: 'Status Approval', type:'badge', sortable: false},
    { key: "visibility", label: 'Status Fungsional', type:'badge', sortable: false},
    { key: "actions", label: 'Actions', isAction: true},
  ]
}
