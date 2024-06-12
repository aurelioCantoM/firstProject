import { Component } from '@angular/core';
import { RegisterManagerService } from '../register/services/register-manager.service';

@Component({
  selector: 'app-search-adapter',
  templateUrl: './search-adapter.component.html',
  styleUrls: ['./search-adapter.component.css']
})
export class SearchAdapterComponent {

  constructor(private managerService: RegisterManagerService) { 
    
  }

}
