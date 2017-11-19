import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarDesComponent } from './nav-bar-des.component';

describe('NavBarDesComponent', () => {
  let component: NavBarDesComponent;
  let fixture: ComponentFixture<NavBarDesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBarDesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarDesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
