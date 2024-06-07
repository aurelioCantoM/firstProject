export type ProductsList = Array<Product>;

export type Product = {
  productId: number;
  productName: string;
  price: number;
  quantityInStock: number;
  imgUrl: string;
  description: string;
}

export interface ProductToCart extends Product {
  selectedQuantity: number,
}

export type Cart = {
  selectedProducts: Array<ProductToCart>,
  numberOfItems: number;
  totalSum: number;

};

export type User = {
  email: string,
  password: string, 
  cart?: Cart,
  firstName: string,
  lastName: string,
  date?: any,
  mobile: number,
}

export const EMPTY_CART: Cart = {
  selectedProducts: [],
  numberOfItems: 0,
  totalSum: 0,
}

export const EMPTY_USER: User = {
  email: '',
  password: '',
  cart: EMPTY_CART,
  firstName: '',
  lastName: '',
  date: new Date(),
  mobile: 0,
}