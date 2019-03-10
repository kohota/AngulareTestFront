import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appNoEmptyInput]'
})
export class NoEmptyInputDirective {


  constructor() { }

  @HostListener('keyup', ['$event']) onKeyUp($event) {
    console.log($event)
    if($event.target.value.trim().length==0){
      console.log($event.target.value.trim().length);
      $event.target.value=null;
    }
    
  }
}
