import { ChangeDetectionStrategy, OnInit, ViewEncapsulation } from '@angular/core';
import { Input } from '@angular/core';
import { Component} from '@angular/core';

@Component({
  selector:'ui-box',
  template: '<ng-content></ng-content>',
  host: {
        '[class]' : 'boxLayoutClasses'
      },
  styleUrls: ['./box.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutBoxComponent implements OnInit {
  boxLayoutClasses?: string;

  @Input() padding?: BoxPaddings = 'default';

  @Input() paddingX?: BoxPaddings;
  @Input() paddingY?: BoxPaddings;
 
  @Input() paddingTop?: BoxPaddings;
  @Input() paddingRight?: BoxPaddings;
  @Input() paddingBottom?: BoxPaddings;
  @Input() paddingLeft?: BoxPaddings;

  constructor() { }

  ngOnInit(): void {
    
    this.boxLayoutClasses = [      
      this.paddingY ? `ui-layout-box-y-${this.paddingY}` : '',
      this.paddingX ? `ui-layout-box-x-${this.paddingX}` : '',

      this.paddingTop ? `ui-layout-box-top-${this.paddingTop}` : '',
      this.paddingRight ? `ui-layout-box-right-${this.paddingRight}` : '',
      this.paddingBottom ? `ui-layout-box-bottom-${this.paddingBottom}` : '',
      this.paddingLeft ? `ui-layout-box-leftx-${this.paddingLeft}` : '',
    ].join(' ');

    if(!this.boxLayoutClasses.length) {
      this.boxLayoutClasses.concat(` ui-layout-box-${this.padding}`);
    }

  }

}

export type BoxPaddings = 'xsmall'|'small'|'medium'|'large'|'default';