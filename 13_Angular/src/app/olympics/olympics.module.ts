import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesComponent } from './games/games.component';
import { DbService } from './db.service';
import { Routes, RouterModule } from '@angular/router';
import { GameDetailsComponent } from './game-details/game-details.component';

export const ROUTE: Routes = [
  { path: '', 
    component: GamesComponent,
    children: [
      { path: 'game/:id', component: GameDetailsComponent}
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTE)
  ],
  providers: [DbService],
  declarations: [GamesComponent, GameDetailsComponent],
  bootstrap: [GamesComponent]
})
export class OlympicsModule { }
