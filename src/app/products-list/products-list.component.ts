import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { Product, ProductToCart, ProductsList } from '../type-definitions/product-definitions';
import { CartManagerService } from '../cart/manager-service/cart-manager.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  private readonly destroyRef = inject(DestroyRef)
  products: ProductsList;
  isProductSelected: boolean;


  constructor(private cartManager: CartManagerService){
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
    this.products[productIndex].quantityInStock = event.quantityInStock - event.selectedQuantity;
    alert(event);
    this.isProductSelected = false;
  }

  handleCancelledSelection(event: string) {
    alert(event);
    this.isProductSelected = false;
  }
  
}
