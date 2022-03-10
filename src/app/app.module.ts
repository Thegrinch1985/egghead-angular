import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StarWarsListComponent } from './star-wars-list/star-wars-list.component';
import { StarWarsPeopleComponent } from './star-wars-people/star-wars-people.component';

@NgModule({
  declarations: [
    AppComponent,
    StarWarsListComponent,
    StarWarsPeopleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
