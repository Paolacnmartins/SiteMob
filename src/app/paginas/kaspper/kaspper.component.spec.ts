import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KaspperComponent } from './kaspper.component';

describe('KaspperComponent', () => {
  let component: KaspperComponent;
  let fixture: ComponentFixture<KaspperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KaspperComponent]
    });
    fixture = TestBed.createComponent(KaspperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
