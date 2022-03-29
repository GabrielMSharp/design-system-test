import { Component, Input, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'lib-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class IconComponent implements OnInit {
  @Input() iconSize: 'small'|'large' = 'large';
  @Input() icon!: string;
  @Input() width?: number;
  @Input() height?: number;
  @Input() class?: string;

  size?: string;
  
  constructor() { }

  ngOnInit(): void {
    this.size = window.getComputedStyle(document.documentElement).getPropertyValue(`--icon-size-${this.iconSize}`).trim();
    if (!this.width || !this.height) {
      this.width = parseInt(this.size, 10);
      this.height = parseInt(this.size, 10);
    }
  }

}
