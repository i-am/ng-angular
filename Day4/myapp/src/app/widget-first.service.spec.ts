import { TestBed, inject } from '@angular/core/testing';

import { WidgetFirstService } from './widget-first.service';

describe('WidgetFirstService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WidgetFirstService]
    });
  });

  it('should be created', inject([WidgetFirstService], (service: WidgetFirstService) => {
    expect(service).toBeTruthy();
  }));
});
