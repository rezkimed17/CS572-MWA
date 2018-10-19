import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesComponent } from './games/games.component';
import { DbService } from './db.service';
import { Routes, RouterModule } from '@angular/router';
import { GameDetailsComponent } from './game-details/game-details.component';

export const lazy_route = [
  { path: '', component: GamesComponent},
  { path: '', 
    component: GamesComponent,
    children: [
    {
      path: 'game/:id',
      component: GameDetailsComponent
    }]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(lazy_route)
  ],
  providers: [DbService],
  declarations: [GamesComponent, GameDetailsComponent],
  bootstrap: [GamesComponent]
})
export class OlympicsModule { }
