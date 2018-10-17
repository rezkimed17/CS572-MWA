import { MyvisibilityDirective } from './myvisibility.directive';
import { ElementRef } from '@angular/core';

describe('MyvisibilityDirective', () => {
  it('should create an instance', () => {
    const directive = new MyvisibilityDirective();
    expect(directive).toBeTruthy();
  });
});
