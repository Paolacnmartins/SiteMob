import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormfotografiaComponent } from './formfotografia.component';

describe('FormfotografiaComponent', () => {
  let component: FormfotografiaComponent;
  let fixture: ComponentFixture<FormfotografiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormfotografiaComponent]
    });
    fixture = TestBed.createComponent(FormfotografiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
