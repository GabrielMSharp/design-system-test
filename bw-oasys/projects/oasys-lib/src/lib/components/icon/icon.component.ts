import { Component, Input, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { TokenService } from '../../services/token.service';
import { IconNames, IconContext } from './icon';
@Component({
  selector: 'oasys-icon',
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
  
  constructor(private tokenService: TokenService) { }

  ngOnInit(): void {
    this.size = this.tokenService.getTokenValue(`--icon-size-${this.iconSize}`);;
    this.iconPlacementClass = `icon-context-${this.iconContext}`;
    if (!this.iconWidth || !this.iconHeight) {
      this.iconWidth = parseInt(this.size, 10);
      this.iconHeight = parseInt(this.size, 10);
    }
  }

}
