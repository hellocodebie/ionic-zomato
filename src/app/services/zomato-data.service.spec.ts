import { TestBed } from '@angular/core/testing';

import { ZomatoDataService } from './zomato-data.service';

describe('ZomatoDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ZomatoDataService = TestBed.get(ZomatoDataService);
    expect(service).toBeTruthy();
  });
});
