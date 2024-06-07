import { Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CartManagerService } from './manager-service/cart-manager.service';
import { Cart } from '../type-definitions/product-definitions';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  private readonly destroyRef = inject(DestroyRef);
  cart: Cart;
  isCartEmpty: boolean;
  sortField: string;
  sortOrder: string;

  constructor(private cartManager: CartManagerService){
    this.cartManager.cart.pipe(
      takeUntilDestroyed(this.destroyRef),
    ).subscribe((latestCart: Cart) => {
      this.cart = latestCart;
      this.isCartEmpty = this.cart.numberOfItems <= 0;
    });
  }
}
