import { PartialStateUpdater, signalState, withState } from '@ngrx/signals'
import { Cart, EMPTY_CART, EMPTY_USER, Product, ProductToCart, ProductsList, User } from '../type-definitions/product-definitions'
import { Injectable, inject } from '@angular/core';
import { RegisterManagerService } from '../register/services/register-manager.service';
import { productListData } from 'src/app/model/products-list.model';

export interface RetailSession {
  isUserLoggedIn: boolean,
  userCart: Cart,
  paymentOptions?: Array<Record<string, any>>, //TODO [AC]: this will be an array of PaymentMethod interface
  loggedUser: User,
  availableProducts: ProductsList,
}

@Injectable({
  providedIn: 'root'
})
export class RetailSessionStore {
  readonly #registerManagerService = inject(RegisterManagerService);
  
  readonly retailState = signalState<RetailSession>({
    isUserLoggedIn: false,
    userCart: EMPTY_CART,
    loggedUser: EMPTY_USER,
    paymentOptions: [],
    availableProducts: productListData,
  });

  setLoggedInUser(loggedUser: User): PartialStateUpdater<{loggedUser: User, isUserLoggedIn: boolean}> {
    return (state) => ({user: loggedUser, isUserLoggedIn: true});
  }

  setLoggedOutUser(): PartialStateUpdater<{loggedUser: User, isUserLoggedIn: boolean}> {
    return (state) => ({user: EMPTY_USER, isUserLoggedIn: false});
  }

  addToCart(addedProduct: ProductToCart): PartialStateUpdater<{userCart: Cart}>  {
    return (state) => {
      debugger;
      if(state.userCart.selectedProducts.length === 0) {
        return ({ userCart: {
            selectedProducts: [addedProduct],
            numberOfItems: addedProduct.selectedQuantity,
            totalSum: addedProduct.price * addedProduct.selectedQuantity
          } as Cart
        });
      }
      const ndxOnCart = state.userCart.selectedProducts.findIndex(product => product.productId === addedProduct.productId);
      const selectionPrice  = addedProduct.price * addedProduct.selectedQuantity;
      if(ndxOnCart === -1){
        return ({ userCart: {
            selectedProducts: [...state.userCart.selectedProducts, addedProduct],
            numberOfItems: state.userCart.numberOfItems + addedProduct.selectedQuantity,
            totalSum: state.userCart.totalSum + selectionPrice
          } as Cart
        });
      } 
      else {
        return {
          userCart: 
            state.userCart.selectedProducts.reduce((acc, product) => {
              let totalSum = acc.totalSum;
              let numberOfItems = acc.numberOfItems;
              let selectedProducts = acc.selectedProducts;

              if(product.productId === addedProduct.productId) {
                totalSum = totalSum + (selectionPrice + (product.price * product.selectedQuantity));
                numberOfItems = numberOfItems + (addedProduct.selectedQuantity + product.selectedQuantity);
                selectedProducts[ndxOnCart].selectedQuantity += addedProduct.selectedQuantity;
              } else {
                totalSum = acc.totalSum + (product.price * product.selectedQuantity);
                numberOfItems = acc.numberOfItems + product.selectedQuantity;
                selectedProducts = [...selectedProducts, product];
              }
              return {totalSum, numberOfItems, selectedProducts};
        }, {selectedProducts: [] as Array<ProductToCart>, numberOfItems: 0, totalSum: 0})};
      }
    };
}

  removeFromCart(productId: number): PartialStateUpdater<{userCart: Cart}> {
    return (state) => {
      const selectedProducts = state.userCart.selectedProducts.filter(product => product.productId !== productId);
      const numberOfItems = selectedProducts.reduce((acc, product) => acc + product.selectedQuantity, 0);
      const totalSum = selectedProducts.reduce((acc, product) => acc + product.selectedQuantity * product.price, 0);
      return {userCart: {selectedProducts, numberOfItems, totalSum}};
    };
  }

  setPaymentOptions(paymentOptions: Array<Record<string, any>>): PartialStateUpdater<{paymentOptions: Array<Record<string, any>>}> {
    return (state) => ({paymentOptions});
  }



}