import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DdnavbarComponent } from './ddnavbar.component';

describe('DdnavbarComponent', () => {
  let component: DdnavbarComponent;
  let fixture: ComponentFixture<DdnavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DdnavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DdnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
