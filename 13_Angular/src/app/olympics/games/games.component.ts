import { Component, OnInit } from '@angular/core';
import { DbService } from '../db.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  games: object;
  constructor(private service: DbService) {}
  ngOnInit() {
    console.log("loading ...");
    this.service.getData()
      .then( data => this.games = JSON.parse(data) )
      .catch((error) => console.log(error));
  }
}
