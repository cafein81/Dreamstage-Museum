import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngVerticalDynamicTabAnchor]'
})
export class DynamicTabAnchorDirective {
  constructor(public viewContainer: ViewContainerRef) {
  }
}
