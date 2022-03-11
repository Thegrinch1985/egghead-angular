import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StarWarsListComponent } from './star-wars-list/star-wars-list.component';
import { StarWarsPeopleComponent } from './star-wars-people/star-wars-people.component';
import { AppHabitListComponent } from './app-habit-list/app-habit-list.component';
import { AppHabitItemComponent } from './app-habit-item/app-habit-item.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    StarWarsListComponent,
    StarWarsPeopleComponent,
    AppHabitListComponent,
    AppHabitItemComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
