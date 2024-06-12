import { Component, DestroyRef, effect, inject } from '@angular/core';
import { Product, ProductToCart, ProductsList } from '../type-definitions/product-definitions';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatDialog } from '@angular/material/dialog';
import { AddToCartComponent } from '../add-to-cart/add-to-cart.component';
import { RetailSessionStore } from '../retail-session-store/retail-session.store';
import { patchState } from '@ngrx/signals';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {
  private readonly destroyRef = inject(DestroyRef);
  readonly cartStore = inject(RetailSessionStore);
  enableView: boolean;


  constructor(public dialog: MatDialog){
    effect(() => this.enableView = this.cartStore.retailState.isUserLoggedIn());
  }

  toggleAddToCart(productToAdd: Product) {
    //TODO [AC]; toggle a new dialog with the information to add to cart. maybe add to cart component should be refactored so that it can be used as a pop up dialog
    const dialogRef  = this.dialog.open(AddToCartComponent, {data: productToAdd});
    dialogRef.afterClosed().pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe((result: ProductToCart) => {
      debugger;
      if(!!result){
        patchState(this.cartStore.retailState, this.cartStore.addToCart(result));
      }
    });
  }
  
}
