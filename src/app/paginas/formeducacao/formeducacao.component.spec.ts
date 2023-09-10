import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormeducacaoComponent } from './formeducacao.component';

describe('FormeducacaoComponent', () => {
  let component: FormeducacaoComponent;
  let fixture: ComponentFixture<FormeducacaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormeducacaoComponent]
    });
    fixture = TestBed.createComponent(FormeducacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
