// pagination.component.ts
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, ArrowLeft, ArrowRight } from 'lucide-angular';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule, LucideAngularModule], // Impor CommonModule untuk *ngFor, *ngIf, dll. dan LucideAngularModule untuk ikon
  templateUrl: './pagination.component.html',
})
export class PaginationComponent {
  @Input() currentPage: number = 1;
  @Input() totalPage: number = 1;
  @Output() pageChange = new EventEmitter<number>();

  get pages(): (number | string)[] {
    if (this.totalPage <= 7) {
      return Array.from({ length: this.totalPage }, (_, i) => i + 1);
    } else if (this.currentPage <= 3) {
      return [1, 2, 3, '...', this.totalPage - 1, this.totalPage];
    } else if (this.currentPage >= this.totalPage - 2) {
      return [1, 2, '...', this.totalPage - 2, this.totalPage - 1, this.totalPage];
    } else {
      return [1, '...', this.currentPage - 1, this.currentPage, this.currentPage + 1, '...', this.totalPage];
    }
  }

  handlePrev(): void {
    if (this.currentPage > 1) this.pageChange.emit(this.currentPage - 1);
  }

  handleNext(): void {
    if (this.currentPage < this.totalPage) this.pageChange.emit(this.currentPage + 1);
  }

  onPageClick(page: number | string): void {
    if (typeof page === 'number') this.pageChange.emit(page);
  }
}

