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
  firstName: string,
  lastName: string,
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
  firstName: '',
  lastName: '',
  mobile: 0,
}