import { TestBed } from '@angular/core/testing';

import { CandidatotematicasService } from './candidatotematicas.service';

describe('CandidatotematicasService', () => {
  let service: CandidatotematicasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CandidatotematicasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
