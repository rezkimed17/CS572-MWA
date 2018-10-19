import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DbService } from '../db.service';

@Component({
  selector: 'app-game-details',
  template: `
    <div class="card" *ngIf="details?.game">
      <div class="card-body">
        <h5 class="card-title"> Game name: {{details?.game?.name}} </h5>
        <h6 class="card-subtitle mb-2 text-muted">ID: {{details?._id}}</h6>
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Stadium</th>
              <th scope="col">Date</th>
              <th scope="col">Time</th>
            </tr>
          </thead>
          <tbody>
              <tr *ngFor="let schedule of details?.game?.schedule; let i = index">
                  <th scope="row">{{i+1}}</th>
                  <td>{{schedule.stadium}}</td>
                  <td>{{schedule.date}}</td>
                  <td>{{schedule.time}}</td>
              </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
  styles: ['div.card {margin-top: 50px}']
})
export class GameDetailsComponent implements OnInit {
  private details:object;
  constructor(private route: ActivatedRoute, private service: DbService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.service.getDataById(params["id"])
        .then(data => this.details = data)
        .catch(error => console.log(error));
    });
  }

}
