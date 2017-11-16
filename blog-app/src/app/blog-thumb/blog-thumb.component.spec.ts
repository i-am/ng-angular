import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogThumbComponent } from './blog-thumb.component';

describe('BlogThumbComponent', () => {
  let component: BlogThumbComponent;
  let fixture: ComponentFixture<BlogThumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogThumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogThumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
