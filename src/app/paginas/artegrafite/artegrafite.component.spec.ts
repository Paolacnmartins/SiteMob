import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtegrafiteComponent } from './artegrafite.component';

describe('ArtegrafiteComponent', () => {
  let component: ArtegrafiteComponent;
  let fixture: ComponentFixture<ArtegrafiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArtegrafiteComponent]
    });
    fixture = TestBed.createComponent(ArtegrafiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
