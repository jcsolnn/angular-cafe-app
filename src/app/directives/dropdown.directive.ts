import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector:'[appDropdown]'
})
export class DropdownDirective{
  @HostBinding('class.show') isShowing = false;

  @HostListener('click') toggleShow(){
    this.isShowing = !this.isShowing
  }

}
