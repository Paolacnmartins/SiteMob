import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormtematicasComponent } from './formtematicas.component';

describe('FormtematicasComponent', () => {
  let component: FormtematicasComponent;
  let fixture: ComponentFixture<FormtematicasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormtematicasComponent]
    });
    fixture = TestBed.createComponent(FormtematicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
