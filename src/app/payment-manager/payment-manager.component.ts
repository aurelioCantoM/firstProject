import { Component } from '@angular/core';

@Component({
  selector: 'app-payment-manager',
  templateUrl: './payment-manager.component.html',
  styleUrls: ['./payment-manager.component.css']
})
export class PaymentManagerComponent {
  //TODO[AC]: debit/credit, apple pay, wire transfer, paypal esch one will be a single Use router outlets and a payments service to get the data for the form of each payment method
}
