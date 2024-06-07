import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if-examples',
  templateUrl: './ng-if-examples.component.html',
  styleUrls: ['./ng-if-examples.component.css']
})
export class NgIfExamplesComponent {
  shouldUpdate: boolean;

  constructor(){
    this.shouldUpdate = true;
  }

}
