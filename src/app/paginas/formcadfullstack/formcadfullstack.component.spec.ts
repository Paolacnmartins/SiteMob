import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormcadfullstackComponent } from './formcadfullstack.component';

describe('FormcadfullstackComponent', () => {
  let component: FormcadfullstackComponent;
  let fixture: ComponentFixture<FormcadfullstackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormcadfullstackComponent]
    });
    fixture = TestBed.createComponent(FormcadfullstackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
