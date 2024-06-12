import { Component, computed, input, InputSignal, OnInit, Signal, signal, WritableSignal } from '@angular/core';
import { Cart, Product, ProductsList, ProductToCart } from '../type-definitions/product-definitions';
import { RetailSessionStore } from '../retail-session-store/retail-session.store';
import { ActionableRegistrtaion, RegisterManagerService } from '../register/services/register-manager.service';

interface SearchInterface {
  name: string;
  image: string;
  price: number;
  description: string;
  quantity: number;
}

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
  searchOpts: Signal<Array<{label: string, value: {arr: Array<Record<string, any>>, header: string, enabled: boolean}, enabled: boolean}>>;
  tableHeader: Array<string>;
  selectedSearchOpt: {arr: Array<Record<string, any>>, header: string, enabled: boolean};
  computedProductArray: Signal<Array<SearchInterface>>;
  computedCartArray: Signal<Array<SearchInterface>>;
  constructor(
    private readonly cartStore: RetailSessionStore,
    private readonly identityStore: RegisterManagerService
  ){
    this.computedCartArray = computed(() => {
      return this.cartStore.retailState.userCart.selectedProducts().map((product: ProductToCart) => {
        return {
          name: product.productName,
          image: product.imgUrl,
          price: product.price,
          description: product.description,
          quantity: product.selectedQuantity
        }
      });
    });

    this.computedProductArray = computed(() => {
      return this.cartStore.retailState.availableProducts().map((product: Product) => {
        return {
          name: product.productName,
          image: product.imgUrl,
          price: product.price,
          description: product.description,
          quantity: product.quantityInStock
        }
      });
    });

      
    this.searchOpts = computed(() =>{
      const isUserLoggedIn = this.identityStore.identityState.registrationMethod() === ActionableRegistrtaion.LOGGEDIN;
      return [
        {label: 'Products', value: {arr: this.computedProductArray(), header: 'Products', enabled: true}, enabled: true},
        {label: 'Cart', value: {arr: this.computedCartArray(), header: 'Cart',   enabled: isUserLoggedIn},  enabled: isUserLoggedIn}
      ];
    });

    this.selectedSearchOpt = this.searchOpts()[0].value;

    this.tableHeader = ['Name', 'Image', 'Description', 'Price', 'Stock/Selected Qty'];

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
