import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DbService } from '../db.service';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit {
  private id:string;
  private details:object;
  constructor(private route: ActivatedRoute, private service: DbService) {
    route.params.subscribe(params => this.id = params["id"]);
  }

  ngOnInit() {
    this.service.getDataById(this.id)
    .then( data => {this.details = JSON.parse(data.toString())} )
    .catch((error) => console.log(error));
  }

}
