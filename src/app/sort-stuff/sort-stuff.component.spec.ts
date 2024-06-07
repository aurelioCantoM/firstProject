import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortStuffComponent } from './sort-stuff.component';

describe('SortStuffComponent', () => {
  let component: SortStuffComponent;
  let fixture: ComponentFixture<SortStuffComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SortStuffComponent]
    });
    fixture = TestBed.createComponent(SortStuffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
