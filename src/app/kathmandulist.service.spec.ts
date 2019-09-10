import { TestBed } from '@angular/core/testing';

import { KathmandulistService } from './kathmandulist.service';

describe('KathmandulistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KathmandulistService = TestBed.get(KathmandulistService);
    expect(service).toBeTruthy();
  });
});
