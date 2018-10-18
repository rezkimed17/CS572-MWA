import { Directive, Input, Output, OnInit, EventEmitter, HostBinding, HostListener, ElementRef } from '@angular/core';
import { hostElement } from '@angular/core/src/render3/instructions';

@Directive({
  selector: '[mynewcolor]'
})
export class MynewcolorDirective implements OnInit {
  
  private colors: string[];
  @Input() mynewcolor: string;
  @Output() colorChange: EventEmitter<string>;

  @HostBinding('style.color') current_color: string;
  @HostListener('click') hostElementClicked() {
    this.current_color = this.colors[Math.floor(Math.random() * this.colors.length)];
    this.colorChange.emit(this.current_color);
  }
  
  constructor(private element:ElementRef) {
    this.colors = ['Black', 'Yellow', 'Blue', 'Red', 'Pink', 'Green'];
    this.colorChange = new EventEmitter();
    this.current_color = this.colors[0];
  }

  ngOnInit(): void {
    this.colorChange.emit(this.current_color);
  }

}
