import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarItemsComponent } from './nav-bar-items.component';

describe('NavBarItemsComponent', () => {
  let component: NavBarItemsComponent;
  let fixture: ComponentFixture<NavBarItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBarItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
