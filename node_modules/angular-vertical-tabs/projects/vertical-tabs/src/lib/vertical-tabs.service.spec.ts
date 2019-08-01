import { inject, TestBed } from '@angular/core/testing';

import { VerticalTabsService } from './vertical-tabs.service';

describe('VerticalTabsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VerticalTabsService]
    });
  });

  it('should be created', inject([VerticalTabsService], (service: VerticalTabsService) => {
    expect(service).toBeTruthy();
  }));
});
