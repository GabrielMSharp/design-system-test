import { Component, Input, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { IconNames, IconContext } from './icon';
@Component({
  selector: 'lib-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class IconComponent implements OnInit {
  @Input() iconSize: 'small'|'large' = 'large';
  @Input() iconName!: IconNames;
  @Input() iconContext: IconContext = 'none';
  
  @Input() iconWidth?: number;
  @Input() iconHeight?: number;
  @Input() iconClass?: string;

  size?: string;
  iconPlacementClass?: string;
  
  constructor() { }

  ngOnInit(): void {
    this.size = window.getComputedStyle(document.documentElement).getPropertyValue(`--icon-size-${this.iconSize}`).trim();
    this.iconPlacementClass = `icon-context-${this.iconContext}`;
    if (!this.iconWidth || !this.iconHeight) {
      this.iconWidth = parseInt(this.size, 10);
      this.iconHeight = parseInt(this.size, 10);
    }
  }

}
