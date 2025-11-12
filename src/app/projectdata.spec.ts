import { TestBed } from '@angular/core/testing';

import { Projectdata } from './projectdata';

describe('Projectdata', () => {
  let service: Projectdata;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Projectdata);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
