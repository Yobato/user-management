import { Component } from '@angular/core';
import { BaseTablePageComponent } from '../../base-table.page';
import { DataItem, PropertyConditionService } from '../../../services/property-condition.service';
import { TableColumn } from '../../../components/table-untitled/table-untitled.component';

@Component({
  selector: 'app-property-condition',
  standalone: false,
  templateUrl: './property-condition.html',
  styleUrl: './property-condition.css'
})
export class PropertyConditionPage extends BaseTablePageComponent<DataItem> {

  tableCols: TableColumn[] = [
      {key: 'nama_property_condition', label: 'Kondisi Properti', sortable: true},
      {key: 'deskripsi_property_condition', label: 'Deskripsi', sortable: true},
      {key: 'created_by', label: 'Created by', sortable: true},
      {key: 'updated_by', label: 'Updated by', sortable: true},
      {key: 'status_approval', label: 'Status Approval', type:'badge', sortable: true },
      {key: 'is_visible', label: 'Status Fungsional', type: 'badge', sortable: true},
      {key: 'actions', label: 'Actions', isAction: true}
    ];

    override filterableKeys: (keyof DataItem)[] = [
      'deskripsi_property_condition', 'nama_property_condition', 'created_by', 'updated_by', 'status_approval', 'is_visible'
    ];

    constructor(private propertyConditionService: PropertyConditionService){
      super();
    }

    override ngOnInit(): void {
      this.allData = this.propertyConditionService.getAllPropertyConditionData();
      this.tableData = [...this.allData];
    }


}
