import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmobComponent } from './admob.component';

describe('AdmobComponent', () => {
  let component: AdmobComponent;
  let fixture: ComponentFixture<AdmobComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdmobComponent]
    });
    fixture = TestBed.createComponent(AdmobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
