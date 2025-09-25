import { Directive, OnInit } from '@angular/core';
import { TableColumn } from '../components/table-untitled/table-untitled.component';

@Directive()
export abstract class BaseTablePageComponent<T extends {id: number}> implements OnInit {
  public allData: T[] = [];
  public tableData: T[] = [];
  public page:number = 1;
  public query: string = '';
  public itemsPerPage: number = 7;

  abstract tableCols: TableColumn[];
  abstract filterableKeys: (keyof T)[];

  constructor(){}

  ngOnInit(): void {

  }

  onSortChange(e: { key: string; direction: 'asc' | 'desc' }): void {
    const key = e.key as keyof T;
    const directionMultiplier = e.direction === 'asc' ? 1 : -1;

    this.tableData = [...this.tableData].sort((a, b) => {
      const valA = a[key];
      const valB = b[key];

      // Logika sorting lengkap yang sudah kita buat
      if (valA == null && valB == null) return 0;
      if (valA == null) return -1 * directionMultiplier;
      if (valB == null) return 1 * directionMultiplier;
      if (valA instanceof Date && valB instanceof Date) {
        return (valA.getTime() - valB.getTime()) * directionMultiplier;
      }
      if (typeof valA === 'boolean' && typeof valB === 'boolean') {
        return (Number(valA) - Number(valB)) * directionMultiplier;
      }
      if (valA < valB) return -1 * directionMultiplier;
      if (valA > valB) return 1 * directionMultiplier;
      return 0;
    });
  }

  public get filteredData(): T[]{
    if(!this.query){
      return this.tableData;
    }
    const queryLower = this.query.toLowerCase();
    return this.tableData.filter(row =>
      this.filterableKeys.some(key => {
        const value = row[key];
        if(value == null) return false;
        if(value instanceof Date){
          return value.toLocaleDateString('id-ID').toLowerCase().includes(queryLower);
        }
        return String(value).toLowerCase().includes(queryLower);
      })
    )
  }

  public get totalPages(): number {
    return Math.ceil(this.filteredData.length / this.itemsPerPage);
  }

  public get paginatedData(): T[] {
    const startIndex = (this.page - 1) * this.itemsPerPage;
    return this.filteredData.slice(startIndex, startIndex + this.itemsPerPage);
  }

  public onPageChange(newPage: number): void {
    this.page = newPage;
  }
}
