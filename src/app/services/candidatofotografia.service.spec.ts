import { TestBed } from '@angular/core/testing';

import { CandidatofotografiaService } from './candidatofotografia.service';

describe('CandidatofotografiaService', () => {
  let service: CandidatofotografiaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CandidatofotografiaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
