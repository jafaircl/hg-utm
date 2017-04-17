import { TestBed, inject } from '@angular/core/testing';

import { PagespeedService } from './pagespeed.service';

describe('PagespeedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PagespeedService]
    });
  });

  it('should ...', inject([PagespeedService], (service: PagespeedService) => {
    expect(service).toBeTruthy();
  }));
});
