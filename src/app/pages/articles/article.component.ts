import { Component } from '@angular/core';
import { TableColumn } from '../../components/table-untitled/table-untitled.component';
import { ArticlesService, DataItem } from '../../services/articles.service';
import { BaseTablePageComponent } from '../base-table.page';

@Component({
  selector: 'app-article',
  standalone: false,
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticlePage extends BaseTablePageComponent<DataItem> {

    // component.ts
    tableCols: TableColumn[] = [
      { key: 'judul', label: 'Judul', sortable: true, customStyle: {width: "600px !important"} },
      { key: 'deskripsi', label: 'Deskripsi', sortable: true },
      { key: 'kategori', label: 'Kategori', sortable: true },
      { key: 'approver', label: 'Approver', sortable: true },
      { key: 'update_date', label: 'Update Date', sortable: true },
      { key: 'highlight', label: 'Highlight', type: 'badge', sortable: true },
      { key: 'status_approval', label: 'Status', type: 'badge', sortable: true },
      { key: 'status_fung', label: 'Fungsi', type: 'badge', sortable: true },
      { key: 'actions', label: 'Actions', isAction: true }
    ];

    override filterableKeys: (keyof DataItem)[] = [
      'judul', 'deskripsi', 'kategori', 'approver', 'update_date', 'highlight', 'status_approval', 'status_fung',
    ];

    constructor(private articleService: ArticlesService){
      super();
    }

    override ngOnInit(): void {
        this.allData = this.articleService.getAllArticles();
        this.tableData = [...this.allData];
    }
}
