import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumantirracistaComponent } from './forumantirracista.component';

describe('ForumantirracistaComponent', () => {
  let component: ForumantirracistaComponent;
  let fixture: ComponentFixture<ForumantirracistaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForumantirracistaComponent]
    });
    fixture = TestBed.createComponent(ForumantirracistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
