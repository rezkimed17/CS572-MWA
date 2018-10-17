import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  template: `
      <p>List of items</p>
      <ul>
          <li *ngFor=" let item of items" [myvisibility]="true" 
          mynewcolor (colorChange)="updateColor($event)">
            {{item}}
          </li>
      </ul>
      <p>Last applied color: {{color}}</p>
  `,
  styles: []
})
export class ListComponent {

  @Input() items: Array<string>;
  private color: string
  
  constructor() {}

  updateColor(current_color) {
    this.color = current_color;
  }

}
