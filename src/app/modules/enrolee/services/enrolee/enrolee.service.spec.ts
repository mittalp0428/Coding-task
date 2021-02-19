import { TestBed } from '@angular/core/testing';

import { EnroleeService } from './enrolee.service';

describe('EnroleeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnroleeService = TestBed.get(EnroleeService);
    expect(service).toBeTruthy();
  });
});
