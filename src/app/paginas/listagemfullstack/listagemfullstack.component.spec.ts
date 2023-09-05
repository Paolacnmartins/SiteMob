import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemfullstackComponent } from './listagemfullstack.component';

describe('ListagemfullstackComponent', () => {
  let component: ListagemfullstackComponent;
  let fixture: ComponentFixture<ListagemfullstackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListagemfullstackComponent]
    });
    fixture = TestBed.createComponent(ListagemfullstackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
