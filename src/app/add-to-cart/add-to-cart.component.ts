import { Component, OnInit, Inject, inject } from '@angular/core';
import { Product } from '../type-definitions/product-definitions';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActionableRegistrtaion, RegisterManagerService } from '../register/services/register-manager.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {
  selProd: Product;
  cartQuantity = 0;
  addBtnDisabled: boolean;
  addCartBtnDisabled: boolean;
  removeBtnDisabled: boolean;
  maximumItemsAvailable: number;
  cancelBtnDisabled: boolean;
  confirmBtnDisabled: boolean;
  
  constructor(
    public dialogRef: MatDialogRef<AddToCartComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Product,
    private readonly identityStore: RegisterManagerService
  ) {
    const { quantityInStock } = data;
    this.maximumItemsAvailable = quantityInStock;
    this.selProd = data;
    this.validateQuantities();
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
    debugger;
    this.addBtnDisabled = this.cartQuantity >= this.maximumItemsAvailable;
    this.removeBtnDisabled = this.cartQuantity <= 1;
    this.addCartBtnDisabled = (this.cartQuantity > 0 && this.identityStore.identityState.registrationMethod() === ActionableRegistrtaion.LOGGEDIN);
  }

  confirmSelection() {
    const { productId, productName, price, imgUrl, description } = this.data;
    this.dialogRef.close({
      productId,
      productName,
      price,
      imgUrl,
      description,
      quantity: this.cartQuantity
    });
  }
}
