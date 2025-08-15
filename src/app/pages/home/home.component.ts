import { Component, OnInit, Input } from "@angular/core";
import { BreadcrumsComponent } from "../../components/breadcrums/breadcrums.component";
import { NgClass } from "@angular/common";
import { cx } from "../../utils/cx";
import { TableColumn, TableUntitledComponent } from "../../components/table-untitled/table-untitled.component";
import { ButtonTable } from "../../components/button-table/button-table.component";
import { SearchTable } from "../../components/search-table/search-table.component";

type TableRow = {
  name: string;
  email: string;
  status: string;
};


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [
    BreadcrumsComponent,
    TableUntitledComponent,
    ButtonTable,
    SearchTable
]
})



export class HomeComponent {
  disabled = false; // nggak usah @Input kalau ini internal

  // component.ts
  tableCols: TableColumn[] = [
    { key: 'name', label: 'Name', sortable: true },
    { key: 'email', label: 'Email', sortable: true },
    { key: 'status', label: 'Status', type: 'badge', sortable: true },
    { key: 'actions', label: 'Actions', isAction: true }
  ];

  tableData = [
    { name: 'John Doe', email: 'john@example.com', status: 'Active' },
    { name: 'Jane Smith', email: 'jane@example.com', status: 'Inactive' },
    { name: 'Jane Smith', email: 'jane@example.com', status: 'Inactive' },
    { name: 'Jane Smith', email: 'jane@example.com', status: 'Inactive' }

  ];

  searchQuery: string = '';


  onSortChange(e: { key: string; direction: 'asc' | 'desc' }) {
    this.tableData.sort((a, b) => {
      const key = e.key as keyof TableRow;
      if (a[key] < b[key]) return e.direction === 'asc' ? -1 : 1;
      if (a[key] > b[key]) return e.direction === 'asc' ? 1 : -1;
      return 0;
    });
  }


}

