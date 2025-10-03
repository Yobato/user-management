import { Component } from '@angular/core';
import { BaseTablePageComponent } from '../../base-table.page';
import { DataItem, PropertyTypeService } from '../../../services/property-type.service';
import { TableColumn } from '../../../components/table-untitled/table-untitled.component';

@Component({
  selector: 'app-property-type',
  standalone: false,
  templateUrl: './property-type.html',
  styleUrl: './property-type.css'
})
export class PropertyTypePage extends BaseTablePageComponent<DataItem> {

  tableCols: TableColumn[] = [
    {key: 'nama_property_type', label: 'Jenis Marital Status', sortable: true},
    {key: 'deskripsi_property_type', label: 'Kode', sortable: true},
    {key: 'created_by', label: 'Created by', sortable: true},
    {key: 'updated_by', label: 'Updated by', sortable: true},
    {key: 'status_approval', label: 'Status Approval', type:'badge', sortable: true },
    {key: 'is_visible', label: 'Status Fungsional', type: 'badge', sortable: true},
    {key: 'actions', label: 'Actions', isAction: true}
  ];

  override filterableKeys: (keyof DataItem)[] = [
    'deskripsi_property_type', 'nama_property_type', 'created_by', 'updated_by', 'status_approval', 'is_visible'
  ];

  constructor(private propertyTypeService: PropertyTypeService){
    super();
  }

  override ngOnInit(): void {
    this.allData = this.propertyTypeService.getAllMaritalStatusData();
    this.tableData = [...this.allData];
  }




}
