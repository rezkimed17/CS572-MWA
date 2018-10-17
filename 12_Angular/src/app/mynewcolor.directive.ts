import { Directive, Input, Output, OnInit, EventEmitter, HostBinding, HostListener, ElementRef } from '@angular/core';
import { hostElement } from '@angular/core/src/render3/instructions';

@Directive({
  selector: '[mynewcolor]'
})
export class MynewcolorDirective implements OnInit {
  
  @Input() mynewcolor: string;
  @Output() colorChange: EventEmitter<string>;
  private colors: string[];
  private current_color = 'Black';

  constructor(private element:ElementRef) {
    this.colors = ['Black', 'Yellow', 'Blue', 'Red', 'Pink', 'Green'];
    this.colorChange = new EventEmitter();
    this.current_color = this.colors[0];
  }

  
  @HostListener('click') hostElementClicked() {
    this.current_color = this.colors[Math.floor(Math.random() * this.colors.length)];
    this.element.nativeElement.style.color = this.current_color;
    this.colorChange.emit(this.current_color);
  }

  ngOnInit(): void {
    this.colorChange.emit(this.current_color);
  }

}
