import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-habit-item',
  templateUrl: './app-habit-item.component.html',
  styleUrls: ['./app-habit-item.component.scss'],
})
export class AppHabitItemComponent implements OnInit {
  @Input() habit: any;
  constructor() {}

  ngOnInit(): void {}
}
