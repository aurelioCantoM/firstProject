import { Component, DestroyRef, inject } from '@angular/core';
import { Product } from '../type-definitions/product-definitions';
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
  constructor() {
    this.editModeOn = false;
    
  }

  toggleEdit() {
    this.editModeOn = !this.editModeOn;
  }
}
