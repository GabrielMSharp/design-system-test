import { Component, Input, OnInit, ViewEncapsulation, ChangeDetectionStrategy, OnChanges, ElementRef } from '@angular/core';
import { TokenService } from '../../services/token.service';
import { WindowService } from '../../services/window.service';
import { IconNames, IconContext } from './icon';
@Component({
  selector:'ui-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class IconComponent implements OnInit, OnChanges {
  @Input() iconSize: 'small'|'large' = 'large';
  @Input() iconName!: IconNames;
  @Input() iconContext: IconContext = 'none';

  @Input() iconWidth?: number;
  @Input() iconHeight?: number;
  @Input() iconClass?: string;

  size?: string;
  iconBrandPath?: string;
  iconDisplayClasses: string[];

  constructor(private tokenService: TokenService, private windowRef: WindowService, private elementRef: ElementRef) { }

  convertRemToPixels(remString: string): number {
    const remNumber = parseFloat(remString.replace('rem', ''));
    return remNumber * parseFloat(getComputedStyle(this.windowRef.nativeWindow.document.documentElement).fontSize);
  }

  ngOnChanges(): void {
    this.ngOnInit();
  }

  ngOnInit(): void {
    this.iconBrandPath = `${this.tokenService.getBrandName(`--icon-component-brand`, this.elementRef.nativeElement)}`
    this.size = this.tokenService.getTokenValue(`--global-size-icon-${this.iconSize}`);

    this.iconDisplayClasses = [
      `icon-context-${this.iconContext}`,
      `icon-size-${this.iconSize}`
    ];

    const sizeInPixels = this.convertRemToPixels(this.size);
    this.iconWidth = sizeInPixels;
    this.iconHeight = sizeInPixels;
  }

}
