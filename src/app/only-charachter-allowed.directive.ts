import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appOnlyCharachterAllowed]'
})
export class OnlyCharachterAllowedDirective {

  constructor() { }

  regexAllowOnlyCharachterAndWhiteSpace='^[a-zA-Z_ ]*$';
  @HostListener('keypress', ['$event']) onKeyUp($event) {
    console.log(new RegExp(this.regexAllowOnlyCharachterAndWhiteSpace).test($event.key));
   
    return new RegExp(this.regexAllowOnlyCharachterAndWhiteSpace).test($event.key);
  }
}
