import { OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[libLayoutBox]',
  host: {
    '[class]' : 'boxLayoutClasses'
}
})
export class LayoutBoxDirective implements OnInit {
  boxLayoutClasses?: string;

  @Input() padding?: BoxPaddings = 'large';

  constructor() { }

  ngOnInit(): void {
    this.boxLayoutClasses = [
      `ui-layout-box-${this.padding}`
    ].join(' ');
  }

}

export type BoxPaddings = 'xsmall'|'small'|'medium'|'large';