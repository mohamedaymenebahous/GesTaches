import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoneListComponent } from './done-list.component';

describe('DoneListComponent', () => {
  let component: DoneListComponent;
  let fixture: ComponentFixture<DoneListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoneListComponent]
    });
    fixture = TestBed.createComponent(DoneListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
