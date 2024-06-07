import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIfExamplesComponent } from './ng-if-examples.component';

describe('NgIfExamplesComponent', () => {
  let component: NgIfExamplesComponent;
  let fixture: ComponentFixture<NgIfExamplesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgIfExamplesComponent]
    });
    fixture = TestBed.createComponent(NgIfExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
