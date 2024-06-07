import { Component, OnInit, DestroyRef, inject } from '@angular/core';
import { Product } from '../type-definitions/product-definitions';
import { CartManagerService } from '../cart/manager-service/cart-manager.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {
  private readonly destroyRef = inject(DestroyRef);
  selProd: Product;
  cartQuantity = 0;
  addBtnDisabled: boolean;
  removeBtnDisabled: boolean;
  maximumItemsAvailable: number;
  cancelBtnDisabled: boolean;
  confirmBtnDisabled: boolean;
  isProductSelected = false;
  
  constructor(private cartManager: CartManagerService){
    this.validateQuantities();
    this.cartManager.selectedProduct.pipe(
      takeUntilDestroyed(this.destroyRef),
    ).subscribe((product: Product) => {
      this.isProductSelected = true;
      this.selProd = product;
      console.log('product on add to cart component');
      this.maximumItemsAvailable = product.quantityInStock;
      this.cartQuantity = 1;
      this.validateQuantities();
    });
  }

  ngOnInit() {
    this.validateQuantities();
  }

  removeItem(){
    this.cartQuantity--;
    this.validateQuantities();
  }

  addItem() {
    this.cartQuantity++;
    this.validateQuantities();
  }

  validateQuantities() {
    this.addBtnDisabled = this.cartQuantity >= this.maximumItemsAvailable;
    this.removeBtnDisabled = this.cartQuantity <= 1;
  }

  confirmSelection(){
    this.cartManager.addToCart({...this.selProd, selectedQuantity: this.cartQuantity})
  }

  cancelSelection(){
    this.cartManager.cancelSelection();
  }
}
