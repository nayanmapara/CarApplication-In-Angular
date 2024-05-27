import { TestBed } from '@angular/core/testing';

import { SCarinfoService } from './s-carinfo.service';

describe('SCarinfoService', () => {
  let service: SCarinfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SCarinfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
