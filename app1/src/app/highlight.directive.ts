import { Directive,, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private ref:ElementRef) { }

  //  @HostListener('mouseenter') on mouseEnter(){
  //   this.ref.native.eleme
   }
  

}
