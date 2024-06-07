import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAdapterComponent } from './search-adapter.component';

describe('SearchAdapterComponent', () => {
  let component: SearchAdapterComponent;
  let fixture: ComponentFixture<SearchAdapterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchAdapterComponent]
    });
    fixture = TestBed.createComponent(SearchAdapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
