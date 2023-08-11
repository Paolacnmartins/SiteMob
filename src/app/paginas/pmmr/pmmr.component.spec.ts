import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmmrComponent } from './pmmr.component';

describe('PmmrComponent', () => {
  let component: PmmrComponent;
  let fixture: ComponentFixture<PmmrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PmmrComponent]
    });
    fixture = TestBed.createComponent(PmmrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
