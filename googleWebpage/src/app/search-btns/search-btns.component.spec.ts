import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBtnsComponent } from './search-btns.component';

describe('SearchBtnsComponent', () => {
  let component: SearchBtnsComponent;
  let fixture: ComponentFixture<SearchBtnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBtnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBtnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
