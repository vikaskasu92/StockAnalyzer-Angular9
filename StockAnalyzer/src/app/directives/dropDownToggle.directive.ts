import { Directive, OnInit, HostListener, ElementRef, Renderer2, HostBinding } from '@angular/core';

@Directive({
    selector:'[dropDownToggle]'
})
export class DropDownToggle{

    @HostBinding('class.show') isOpen:boolean = false;

    constructor(private elementRef:ElementRef, private renderer:Renderer2){}
    
    @HostListener('click')
    clickMethod(){
        this.isOpen = !this.isOpen;
        this.elementRef.nativeElement.querySelector('.dropdown-menu').classList.add('show');
    }

}