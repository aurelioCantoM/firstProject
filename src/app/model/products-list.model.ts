import { Cart, ProductsList, User } from "../type-definitions/product-definitions";

export let productListData =  [
 {
  productId: 1,
  productName: 'Niche Staccato',
  price: 250,
  quantityInStock: 10,
  imgUrl: '../../assets/nicheroadwheels.jpeg',
  description: 'Test 1 description'
},
{
    productId: 2,
    productName: 'Niche Staccato Forged',
    price: 500,
    quantityInStock: 11,
    imgUrl: '../../assets/nicheforged.jpg',
    description: 'Test 1 description'
  },
  {
    productId: 3,
    productName: 'Fifteen52 Tarmac Evo',
    price: 250,
    quantityInStock: 12,
    imgUrl: '../../assets/1552tarmacevo.jpg',
    description: 'Test 1 description'
  },
  {
    productId: 4,
    productName: 'Fifteen52 Turbomac',
    price: 4,
    quantityInStock: 13,
    imgUrl: '../../assets/1552turbomac.jpg',
    description: 'Test 1 description'
  },
  {
    productId: 5,
    productName: 'Rotiform LAS-R',
    price: 250,
    quantityInStock: 14,
    imgUrl: '../../assets/rotilasr.jpg',
    description: 'Test 1 description'
  },
  {
    productId: 6,
    productName: 'Rotiform BLQ',
    price: 250,
    quantityInStock: 15,
    imgUrl: '../../assets/rotiblq.jpg',
    description: 'Test 1 description'
  }
] as ProductsList;



export let usersData: Array<User> = [
  {email: 'aurelio.cantoms@intelliswift.com', password: 'u_pick_it', cart: {} as Cart, firstName: 'Aurelio', lastName: 'Canto', date: new Date(), mobile: 1234567890},
  {email: 'some.example@intelliswift.com', password: 'u_pick_it2', cart: {} as Cart, firstName: 'Some', lastName: 'Example', date: new Date(), mobile: 1234567890},
]