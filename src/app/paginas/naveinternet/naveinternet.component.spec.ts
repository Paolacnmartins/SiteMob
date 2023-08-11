import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaveinternetComponent } from './naveinternet.component';

describe('NaveinternetComponent', () => {
  let component: NaveinternetComponent;
  let fixture: ComponentFixture<NaveinternetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NaveinternetComponent]
    });
    fixture = TestBed.createComponent(NaveinternetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
