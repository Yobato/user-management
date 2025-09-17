import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-table',
  standalone: false,
  templateUrl: './search-table.component.html',
  styleUrl: './search-table.component.css'
})
export class SearchTable {
  @Input() placeholder: string = "Search...";
  @Input() value: string = '';
  @Output() valueChange = new EventEmitter<string>();

  onInputChange(event: Event){
    const target = event.target as HTMLInputElement;
    this.value = target.value;
    this.valueChange.emit(this.value);
  }

}
