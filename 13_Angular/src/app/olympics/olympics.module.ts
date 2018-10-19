import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesComponent } from './games/games.component';
import { DbService } from './db.service';
import { Routes, RouterModule } from '@angular/router';
import { GameDetailsComponent } from './game-details/game-details.component';
import { GameGuard } from './game.guard';
import { ErrorComponent } from './error.component';

export const ROUTE: Routes = [
  { path: '', 
    component: GamesComponent,
    children: [
      { 
        path: 'game/:id', 
        component: GameDetailsComponent,
        canActivate: [GameGuard]
      }
    ]
  },
  { 
    path: 'notfound', 
    component: ErrorComponent,
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTE)
  ],
  providers: [DbService, GameGuard],
  declarations: [GamesComponent, GameDetailsComponent, ErrorComponent],
  bootstrap: [GamesComponent]
})
export class OlympicsModule { }
