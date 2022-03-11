import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Habit } from '../habit';

@Component({
  selector: 'app-app-habit-list',
  templateUrl: './app-habit-list.component.html',
  styleUrls: ['./app-habit-list.component.scss'],
})
export class AppHabitListComponent implements OnInit {
  habits: Habit[] = [
    { title: 'A', id: 1 },
    { title: 'B', id: 2 },
    { title: 'C', id: 3 },
    { title: 'D', id: 4 },
    { title: 'E', id: 5 },
  ];
  habitForm: any;
  constructor(private formBuilder: FormBuilder) {
    this.habitForm = this.formBuilder.group({ title: '' });
  }

  ngOnInit(): void {}

  onSubmit(newHabit: Habit): void {
    const id = this.habits.length + 1;
    newHabit.id = id;
    this.habits.push(newHabit);
  }
}
