import {
  ChangeDetectionStrategy,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginatorComponent implements OnInit, OnChanges {
  @Input() currentPage = 1;
  @Input()
  set totalRecords(total: number) {
    this._totalRecords = total;
    this.lastPage = Math.ceil(total / this.rows);
  }
  @Input()
  set rows(rows: number) {
    this._rows = rows;
    this.lastPage = Math.ceil(this.totalRecords / rows);
  }
  @Input() rowsPerPageOptions: number[] = [];
  @Input() get first(): number {
    return this._first;
  }

  @Output() onPageChange: EventEmitter<any> = new EventEmitter();

  get totalRecords() {
    return this._totalRecords;
  }
  get rows() {
    return this._rows;
  }
  set first(val: number) {
    this._first = val;
  }

  pageLinks: number[];
  paginatorState: any;
  _first: number = 0;
  lastPage = this.currentPage;
  private _rows = 20;
  private _totalRecords = 0;

  @HostListener('window:keyup', ['$event'])
  private onWindowKeyUp(event: KeyboardEvent) {
    if (event.key === 'ArrowRight') {
      this.changePageToNext(event);
    } else if (event.key === 'ArrowLeft') {
      this.changePageToPrev(event);
    }
  }
  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.totalRecords) {
      this.updatePageLinks();
      this.updatePaginatorState();
      this.updateFirst();
    }

    if (changes.first) {
      this._first = changes.first.currentValue;
      this.updatePageLinks();
      this.updatePaginatorState();
    }

    if (changes.rows) {
      this.updatePageLinks();
      this.updatePaginatorState();
    }
  }

  ngOnInit() {
    this.updatePaginatorState();
  }
  render() {
    console.log('pagination');
  }

  isFirstPage() {
    return this.getPage() === 0;
  }

  isLastPage() {
    return this.getPage() === this.getPageCount() - 1;
  }

  getPageCount() {
    return Math.ceil(this.totalRecords / this.rows) || 1;
  }

  calculatePageLinkBoundaries() {
    let numberOfPages = this.getPageCount(),
      visiblePages = numberOfPages;

    //calculate range, keep current in middle if necessary
    let start = Math.max(0, Math.ceil(this.getPage() - visiblePages / 2)),
      end = Math.min(numberOfPages - 1, start + visiblePages - 1);

    //check when approaching to last page
    const delta = end - start + 1;
    start = Math.max(0, start - delta);

    return [start, end];
  }

  updatePageLinks() {
    this.pageLinks = [];
    let boundaries = this.calculatePageLinkBoundaries(),
      start = boundaries[0],
      end = boundaries[1];

    for (let i = start; i <= end; i++) {
      this.pageLinks.push(i + 1);
    }
  }

  changePage(p: number) {
    const pc = this.getPageCount();
    const rows = Number(this.rows);

    if (p >= 0 && p <= pc) {
      this._first = rows * p;
      const state = {
        page: p,
        first: this.first,
        rows: rows,
        pageCount: pc,
      };
      this.updatePageLinks();

      this.onPageChange.emit(state);
      this.updatePaginatorState();
    }
  }

  updateFirst() {
    const page = this.getPage();
    if (page > 0 && this.totalRecords && this.first >= this.totalRecords) {
      Promise.resolve(null).then(() => this.changePage(page - 1));
    }
  }

  getPage(): number {
    const dummy = Math.floor(this.first / this.rows);
    return dummy === 0 ? dummy + 1 : dummy;
  }

  changePageToFirst(event) {
    if (!this.isFirstPage()) {
      this.changePage(1);
    }

    event.preventDefault();
  }

  changePageToPrev(event) {
    this.changePage(this.getPage() - 1);
    event.preventDefault && event.preventDefault();
  }

  changePageToNext(event) {
    this.changePage(this.getPage() + 1);
    event.preventDefault && event.preventDefault();
  }

  changePageToLast(event) {
    if (!this.isLastPage()) {
      this.changePage(this.getPageCount());
    }

    event.preventDefault();
  }

  onPageLinkClick(event, page) {
    this.changePage(page);
    event.preventDefault();
  }

  onRppChange() {
    this.changePage(this.getPage());
  }

  updatePaginatorState() {
    this.paginatorState = {
      page: this.getPage(),
      pageCount: this.getPageCount(),
      rows: Number(this.rows),
      first: this.first,
      totalRecords: this.totalRecords,
    };
  }
}
