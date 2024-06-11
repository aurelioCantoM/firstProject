import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { Product, ProductToCart, ProductsList } from '../type-definitions/product-definitions';
import { CartManagerService } from '../cart/manager-service/cart-manager.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatDialog } from '@angular/material/dialog';
import { AddToCartComponent } from '../add-to-cart/add-to-cart.component';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  private readonly destroyRef = inject(DestroyRef)
  products: ProductsList;
  isProductSelected: boolean;


  constructor(private cartManager: CartManagerService, public dialog: MatDialog){
    this.isProductSelected = false;
  }
  ngOnInit(): void {
    this.cartManager.products.pipe(
      takeUntilDestroyed(this.destroyRef),
    ).subscribe(products => this.products = products);
  }

  addToCart(selectedProduct: Product){
    this.cartManager.setSelectedProduct(selectedProduct);
    this.isProductSelected = true;
  }

  handleSelectedEvent(event: ProductToCart) {
    const productIndex = this.products.findIndex((product) => product.productId === event.productId);
    this.isProductSelected = false;
  }

  handleCancelledSelection(event: string) {
    this.isProductSelected = false;
  }

  toggleAddToCart(productToAdd: Product) {
    //TODO [AC]; toggle a new dialog with the information to add to cart. maybe add to cart component should be refactored so that it can be used as a pop up dialog
    const dialogRef  = this.dialog.open(AddToCartComponent, {data: productToAdd});
    dialogRef.afterClosed().pipe(
      takeUntilDestroyed(this.destroyRef)
    )
    debugger;
  }
  
}
