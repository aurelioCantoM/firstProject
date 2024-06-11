import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { productListData } from 'src/app/model/products-list.model';
import { Cart, EMPTY_CART, Product, ProductToCart, ProductsList } from 'src/app/type-definitions/product-definitions';

@Injectable({
  providedIn: 'root'
})
export class CartManagerService {
  products: BehaviorSubject<ProductsList>;
  cart: BehaviorSubject<Cart>;
  selectedProduct: Subject<Product>; //Selected Product
  confirmedProduct: Subject<ProductToCart>; // Confirmed product added to card
  selectedProductArray: Array<ProductToCart>;
  cartCost: number;

  constructor() { 
    this.cartCost = 0;
    this.products = new BehaviorSubject(productListData);
    this.selectedProduct = new Subject();
    this.selectedProductArray = [] as unknown as [ProductToCart];
    this.confirmedProduct = new Subject();
    this.cart = new BehaviorSubject(EMPTY_CART);
  }

  setSelectedProduct(product: Product) {
    this.selectedProduct.next(product);
  }

  addToCart(product: ProductToCart) {
    this.confirmedProduct.next(product);
    this.pushToCart(product);
  }

  cancelSelection() {
    this.selectedProduct.next({
      productId: 0,
      productName: '',
      price: 0,
      imgUrl: '',
      description: '',
    } as Product);
  }
  
  private pushToCart(productToAdd: ProductToCart) {
    const { productId, price, selectedQuantity } = productToAdd;
    const selectionPrice = price * selectedQuantity;
    const productNdx = productListData.findIndex((product: Product) => product.productId === productId); // Index from products from source
    //const productArrNdx = this.selectedProductArray.findIndex((product: Product) => product.productId === productId); // Index from the selected product array
    this.cartCost = this.cartCost + selectionPrice;
    this.cart.next({
      selectedProducts: this.selectedProductArray,
      numberOfItems: this.selectedProductArray.length,
      totalSum: this.cartCost
    });
    return;
  }
}
