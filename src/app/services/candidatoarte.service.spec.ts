import { TestBed } from '@angular/core/testing';

import { CandidatoarteService } from './candidatoarte.service';

describe('CandidatoarteService', () => {
  let service: CandidatoarteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CandidatoarteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
