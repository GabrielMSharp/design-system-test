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

  constructor() { }

  ngOnInit(): void {
    this.boxLayoutClasses = [
      `ui-layout-box-${this.padding}`
    ].join(' ');
  }

}

export type BoxPaddings = 'xsmall'|'small'|'medium'|'large'|'default';