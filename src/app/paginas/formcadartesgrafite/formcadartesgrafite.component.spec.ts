import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormcadartesgrafiteComponent } from './formcadartesgrafite.component';

describe('FormcadartesgrafiteComponent', () => {
  let component: FormcadartesgrafiteComponent;
  let fixture: ComponentFixture<FormcadartesgrafiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormcadartesgrafiteComponent]
    });
    fixture = TestBed.createComponent(FormcadartesgrafiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
