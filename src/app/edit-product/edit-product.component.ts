import { Component, DestroyRef, inject } from '@angular/core';
import { Product } from '../type-definitions/product-definitions';
import { CartManagerService } from '../cart/manager-service/cart-manager.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {
  private readonly destroyRef = inject(DestroyRef);
  productsArr: Array<Product>
  editModeOn: boolean;
  constructor(private cartManager: CartManagerService) {
    this.editModeOn = false;
    this.cartManager.products.pipe(
      takeUntilDestroyed(this.destroyRef),
    ).subscribe((products: Array<Product> ) => this.productsArr = products);
  }

  toggleEdit() {
    this.editModeOn = !this.editModeOn;
  }
}
