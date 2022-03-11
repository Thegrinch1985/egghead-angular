import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppHabitItemComponent } from './app-habit-item.component';

describe('AppHabitItemComponent', () => {
  let component: AppHabitItemComponent;
  let fixture: ComponentFixture<AppHabitItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppHabitItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppHabitItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
