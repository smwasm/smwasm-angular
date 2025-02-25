import { TestBed } from '@angular/core/testing';

import { SmwasmService } from './smwasm.service';

describe('SmwasmService', () => {
  let service: SmwasmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SmwasmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
