import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-wars-list',
  templateUrl: './star-wars-list.component.html',
  styleUrls: ['./star-wars-list.component.scss'],
})
export class StarWarsListComponent implements OnInit {
  films = [
    { id: 1, title: 'A' },
    { id: 2, title: 'B' },
    { id: 3, title: 'C' },
    { id: 4, title: 'D' },
    { id: 5, title: 'E' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
