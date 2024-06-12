import { Component, input, InputSignal, OnInit } from '@angular/core';
import { Cart, Product } from '../type-definitions/product-definitions';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  cart: InputSignal<Cart>;
  searchTerm:string;
  sortField: string;
  sortOrder: string;
  constructor(){
    
  }

  ngOnInit() {
  }

  searchEventHandler(selectedColumn: HTMLSelectElement, selectedOrder: HTMLSelectElement) {
    
  }
  searchTermEventHandler(searchTextBox:any)
  {
    console.log("Key pressed",searchTextBox.value);
    this.searchTerm=searchTextBox.value;

  }

  sortEventHandler(selectedColumn: any, selectedOrder: any) {
    this.sortField = selectedColumn.value;
    this.sortOrder = selectedOrder.value;
    console.log();
  }

}
