import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FBarComponent } from './f-bar.component';

describe('FBarComponent', () => {
  let component: FBarComponent;
  let fixture: ComponentFixture<FBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
