import { TestBed } from '@angular/core/testing';

import { CandidatoeducacaoService } from './candidatoeducacao.service';

describe('CandidatoeducacaoService', () => {
  let service: CandidatoeducacaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CandidatoeducacaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
