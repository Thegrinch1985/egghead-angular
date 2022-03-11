import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppHabitListComponent } from './app-habit-list.component';

describe('AppHabitListComponent', () => {
  let component: AppHabitListComponent;
  let fixture: ComponentFixture<AppHabitListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppHabitListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppHabitListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
