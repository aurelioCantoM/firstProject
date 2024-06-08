import { Component, effect } from '@angular/core';
import { RegisterManagerService } from '../register/services/register-manager.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  showFullMenu: boolean;

  constructor(private registerService: RegisterManagerService) {
    effect(() => {
      this.showFullMenu = this.registerService.isUserRegistered();
    });
  //TODO[AC]: Complete logic to display menu depending on the logged in status from services
  }
}
