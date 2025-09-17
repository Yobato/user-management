import { Component, ContentChild, EventEmitter, Input, Output, TemplateRef } from '@angular/core';

export interface TableColumn {
  key: string;
  label: string;
  sortable?: boolean;
  type?: 'badge' | 'text' | 'image';
  isAction?: boolean;
  customClass?: string;
  customStyle?: {[key:string]:string};
}

@Component({
  selector: 'app-table-untitled',
  standalone: false,
  templateUrl: './table-untitled.component.html',
  styleUrls: ['./table-untitled.component.css'],
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



  getBadgeClass(status: string): {[key: string]: boolean}{
    switch(status){
      case 'Active':
        case 'Approved':
          return {
            'bg-[#ECFDF3]': true,
            'border-[#ABEFC6]': true,
            'text-[#067647]': true,
          };

      case 'Inactive':
        case 'Rejected':
          return {
            'bg-[#FEF3F2]': true,
            'border-[#FECDCA]': true,
            'text-[#B42318]': true,
          };

      case 'Pending':
        return{
          'bg-[#F0F9FF]': true,
          'border-[#B9E6FE]': true,
          'text-[#026AA2]': true,
        };

      default:
        return {
          'bg-[#F5F5F5]': true,
          'border-[#E5E7EB]': true,
          'text-[#717680]': true,
        };
    }
  }
}
