import { Directive, Input, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[myvisibility]'
})
export class MyvisibilityDirective implements OnInit {
  @Input() myvisibility: boolean;
  constructor(private element:ElementRef) {}
  ngOnInit(): void {
    if(!this.myvisibility)  {
      this.element.nativeElement.style.display = "none";
    }
  }
}
