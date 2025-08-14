import { CommonModule } from '@angular/common';
import { Component, ContentChild, EventEmitter, Input, Output, TemplateRef } from '@angular/core';

export interface TableColumn {
  key: string;
  label: string;
  sortable?: boolean;
  type?: 'badge' | 'text';
  isAction?: boolean;
}

@Component({
  selector: 'app-table-untitled',
  templateUrl: './table-untitled.component.html',
  styleUrls: ['./table-untitled.component.css'],
  imports: [CommonModule]
})
export class TableUntitledComponent {
  @ContentChild('tableAction', { static: false }) tableActionTpl!: TemplateRef<any>;
  @Input() columns: TableColumn[] = [];
  @Input() data: any[] = [];


  @Output() sortChange = new EventEmitter<{ key: string, direction: 'asc' | 'desc'}>();

  sortKey: string | null = null;
  sortDirection: 'asc' | 'desc' = 'asc';

  onSort(col: TableColumn){
    if(!col.sortable) return;

    if(this.sortKey === col.key){
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else{
      this.sortKey = col.key;
      this.sortDirection = 'asc';
    }

    this.sortChange.emit({ key: this.sortKey, direction: this.sortDirection})
  }
}
