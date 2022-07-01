import { Component, Input, OnInit, Output, ViewEncapsulation, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef, OnChanges, AfterViewInit } from '@angular/core';
import { TokenService } from '../../services/token.service';
import { IconNames, IconContext } from '../icon/icon';
import { TextTransform } from '../text/text';

@Component({
  selector:'ui-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default
})
export class ButtonComponent implements OnInit, OnChanges, AfterViewInit {

  // // Button Content
  @Input() buttonText: string;
  @Input() buttonIcon?: IconNames;
  @Input() buttonIconPlacement: IconContext = 'leading';

  // Button Stylings
  @Input() buttonSize: 'small'|'large' = 'large';
  @Input() buttonType: 'primary'|'secondary'|'tertiary'|'primary-inverse'|'secondary-inverse'|'teriary-inverse' = 'primary';

  // Button Actions
  @Input() href: string = '';
  @Output() buttonClick: EventEmitter<void> = new EventEmitter();

  buttonDisplayClasses: string[];
  iconContext: IconContext = 'none';
  textTransform!: TextTransform;

  constructor(private tokenService: TokenService) { }

  clickButton(): void {
    console.log('button was clicked');
    this.buttonClick.emit();
  }

  setupClasses(): void {
    this.buttonDisplayClasses = [
      `type-${this.buttonType}`,
      `size-${this.buttonSize}`,
      `${this.buttonIcon ? 'button--has-icon': ''}`,
      `${this.buttonText && this.buttonIcon ? 'button--icon--'+this.buttonIconPlacement : ''}`,
      `${!this.buttonText && this.buttonIcon ? 'button--icon--only' : ''}`
    ].filter((d) => !!d);

    console.log('buttonClasses: ', this.buttonDisplayClasses);

    if(this.buttonIcon) {
      this.iconContext = this.buttonText ? this.buttonIconPlacement : 'iconOnly';
    }

    this.textTransform = this.tokenService.getTokenValue(
      `--style-button-${this.buttonSize}-text-transform`
    ) as TextTransform;
  }

  ngOnInit(): void {
    this.setupClasses();
  }

  ngAfterViewInit(): void {
    this.setupClasses();
  }

  ngOnChanges(): void {
    this.setupClasses();
  }

}
