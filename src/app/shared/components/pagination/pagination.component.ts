import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  imports: [CommonModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css',
})
export class PaginationComponent {
  @Input() currentPage: number = 1;
  @Input() totalPages: number = 1;
  @Output() pageChange = new EventEmitter<number>();

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }
  get displayPages(): (number | string)[] {
    if (this.totalPages <= 10) {
      return this.pages;
    } else {
      const pages: (number | string)[] = [];
      for (let i = 1; i <= 9; i++) {
        pages.push(i);
      }
      pages.push('...');
      pages.push(this.totalPages);
      return pages;
    }
  }

  onPageClick(page: number): void {
    if (page !== this.currentPage) {
      this.currentPage = page;
      this.pageChange.emit(page);
    }
  }
  onNumericPageClick(page: number | string): void {
    if (typeof page === 'number') {
      this.onPageClick(page);
    }
  }

  onPrevious(): void {
    if (this.currentPage > 1) {
      this.onPageClick(this.currentPage - 1);
    }
  }

  onNext(): void {
    if (this.currentPage < this.totalPages) {
      this.onPageClick(this.currentPage + 1);
    }
  }
}
