import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomTooltip]'
})
export class CustomTooltipDirective implements OnInit {
  @Input() customStuff: string;
  @HostListener("mouseenter") onMouseEnter(){
    let divElement = this.renderer.createElement('div');
    
  }

  constructor(private el: ElementRef, private renderer: Renderer2 ) { }

  ngOnInit(){
    throw new Error('Method not implemented.');
  }

}
