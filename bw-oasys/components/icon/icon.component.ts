import { Component, Input, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { TokenService } from '../../projects/oasys-lib/src/lib/services/token.service';
import { WindowService } from '../../projects/oasys-lib/src/lib/services/window.service';
import { IconNames, IconContext } from './icon';
@Component({
  selector:'ui-icon',
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
  
  constructor(private tokenService: TokenService, private windowRef: WindowService) { }

  convertRemToPixels(remString: string): number {    
    const remNumber = parseFloat(remString.replace('rem', ''));
    return remNumber * parseFloat(getComputedStyle(this.windowRef.nativeWindow.document.documentElement).fontSize);
  }

  ngOnInit(): void {
    this.size = this.tokenService.getTokenValue(`--size-icon-${this.iconSize}`);;
    this.iconPlacementClass = `icon-context-${this.iconContext}`;
    if (!this.iconWidth || !this.iconHeight) {
      const sizeInPixels = this.convertRemToPixels(this.size);
      this.iconWidth = sizeInPixels;
      this.iconHeight = sizeInPixels;
    }
  }

}
