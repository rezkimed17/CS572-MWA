import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <p>
      Welcome! this is {{title}}
    </p>
  `,
  styles: ['p {padding: 40px}']
})
export class HomeComponent {
  title: string = "Homework13";
  constructor() {}

}
