import { Component, OnInit } from '@angular/core';
import { DbService } from '../db.service';

@Component({
  selector: 'app-games',
  template: `
    <div *ngFor="let game of games; let i=index">
      {{i+1}} - <a [routerLink]="['game', game.id]"> {{game.name}} </a>
    </div>
    <router-outlet></router-outlet>
  `,
  styles: ['div.container {padding: 40px;}']
})
export class GamesComponent implements OnInit {
  games: object;
  constructor(private service: DbService) {}
  ngOnInit() {
    console.log("loading ...");
    this.service.getData()
      .then(data => this.games = data)
      .catch(error => console.log(error));
  }
}
