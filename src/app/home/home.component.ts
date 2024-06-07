import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  showCart:boolean;
  get buttonText() { return this.showCart ? 'Products List' : 'Cart'}
  constructor()
  {
    this.showCart=false;
  }
  toggleDisplay()
  {
    this.showCart=!this.showCart;
  }
}
