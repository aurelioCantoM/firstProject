import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentityComponent } from './identity.component';

describe('IdentityComponent', () => {
  let component: IdentityComponent;
  let fixture: ComponentFixture<IdentityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IdentityComponent]
    });
    fixture = TestBed.createComponent(IdentityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
