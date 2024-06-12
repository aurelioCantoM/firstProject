import { Component, Signal, computed, effect, inject } from '@angular/core';
import { RegisterManagerService } from '../register/services/register-manager.service';
import { RetailSessionStore } from '../retail-session-store/retail-session.store';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  readonly retailStore = inject(RetailSessionStore);
}
