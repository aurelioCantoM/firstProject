import { Component, DestroyRef, effect, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Cart } from '../type-definitions/product-definitions';
import { RetailSessionStore } from '../retail-session-store/retail-session.store';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  private readonly destroyRef = inject(DestroyRef);
  readonly cartStore = inject(RetailSessionStore);
  cart: Cart;
  isCartEmpty: boolean;
  sortField: string;
  sortOrder: string;

  constructor(){
    effect(() => {
      debugger;
      if(this.cartStore.retailState.isUserLoggedIn()){
        this.cart = this.cartStore.retailState.userCart();
        this.isCartEmpty = this.cart.selectedProducts.length === 0;
      }
    });
  }
}
