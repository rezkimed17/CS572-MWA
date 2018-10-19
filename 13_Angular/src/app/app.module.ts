import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';

const ROUTE: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'games',
    loadChildren: './olympics/olympics.module#OlympicsModule'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTE)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
