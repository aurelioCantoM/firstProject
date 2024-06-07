import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './type-definitions/product-definitions';

@Pipe({
  name: 'evenOrOdd'
})
export class EvenOrOddPipe implements PipeTransform {

  transform(value: Array<Product>, ...args: Array<string>): Array<Record<string, any>> {
    if(args[0] === 'even') {
      return value.filter((_item, index) => index % 2 == 0);
    } else if(args[0] === 'odd'){
      return value.filter((_item, index) => index % 2 == 1);
    }
    return value;
  } 
}