import { Component, DestroyRef, inject } from '@angular/core';
import { RegisterManagerService } from '../register/services/register-manager.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  private readonly destroyRef = inject(DestroyRef);
  showFullMenu: boolean;

  constructor(private registerService: RegisterManagerService) {
    this.registerService.isUserRegistered.pipe(
      takeUntilDestroyed(this.destroyRef),
    ).subscribe((isUserRegistered: boolean) => {
      this.showFullMenu = isUserRegistered;;
    });
  }
  //TODO[AC]: Complete logic to display menu depending on the logged in status from services


}
