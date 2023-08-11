import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutocativarComponent } from './institutocativar.component';

describe('InstitutocativarComponent', () => {
  let component: InstitutocativarComponent;
  let fixture: ComponentFixture<InstitutocativarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstitutocativarComponent]
    });
    fixture = TestBed.createComponent(InstitutocativarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
