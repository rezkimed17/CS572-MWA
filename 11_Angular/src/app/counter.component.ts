import { Component, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  outputs: ['counterChange'],
  template: `
    <div>
      <button (click)="decrementCounter()">-</button>
      <span>{{counterValue}}</span>
      <button (click)="incrementCounter()">+</button>
    </div>
  `,
  styles: []
})
export class Counter{
  @Input('counter') counterValue: number;
  counterChange: EventEmitter<number>;
  
  constructor() {
    this.counterChange = new EventEmitter();
  }
  
  incrementCounter() {
    this.counterValue += 1;
    this.counterChange.emit(this.counterValue);
  }
  decrementCounter() {
    this.counterValue -= 1;
    this.counterChange.emit(this.counterValue);
  }
}
