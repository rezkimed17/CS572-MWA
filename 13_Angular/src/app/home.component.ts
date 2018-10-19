import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <p>
      Welcome! this is {{title}}
    </p>
  `,
  styles: ['']
})
export class HomeComponent {
  title: string = "Homework13";
  constructor() {}

}
