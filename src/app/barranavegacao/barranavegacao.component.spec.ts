import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarranavegacaoComponent } from './barranavegacao.component';

describe('BarranavegacaoComponent', () => {
  let component: BarranavegacaoComponent;
  let fixture: ComponentFixture<BarranavegacaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BarranavegacaoComponent]
    });
    fixture = TestBed.createComponent(BarranavegacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
