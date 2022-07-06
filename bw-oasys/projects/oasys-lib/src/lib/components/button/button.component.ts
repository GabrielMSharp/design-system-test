import { Component, Input, OnInit, Output, ViewEncapsulation, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef, OnChanges, AfterViewInit, SimpleChanges } from '@angular/core';
import { TokenService } from '../../services/token.service';
import { IconNames, IconContext } from '../icon/icon';
import { TextTransform } from '../text/text';
import {
  UIButton,
  UIButtonBoolean,
  UIButtonSize,
  UIButtonType
} from './button';

@Component({
  selector:'ui-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent implements OnInit, OnChanges {

  button: UIButton;

  // // Button Content
  @Input() buttonText: string;
  @Input() buttonIcon?: IconNames;
  @Input() buttonIconPlacement: IconContext = 'leading';

  // Button Stylings
  @Input() buttonSize: UIButtonSize = 'large';
  @Input() buttonFullWidth: UIButtonBoolean = false;
  @Input() buttonType: UIButtonType = 'primary';

  // Button Actions
  @Input() href: string = '';
  @Output() buttonClick: EventEmitter<void> = new EventEmitter();
  @Input() buttonDisabled: boolean = false;

  buttonDisplayClasses: string[];
  iconContext: IconContext = 'none';
  textTransform!: TextTransform;

  constructor(private tokenService: TokenService, private changes: ChangeDetectorRef) { }

  clickButton(): void {
    console.log('button was clicked');
    this.buttonClick.emit();
  }

  // setupClasses(): void {
  //   this.buttonDisplayClasses = [
  //     `type-${this.buttonType}`,
  //     `size-${this.buttonSize}`,
  //     `${this.buttonFullWidth === true ? 'button--full-width': ''}`,
  //     `${this.buttonIcon ? 'button--has-icon': ''}`,
  //     `${this.buttonText && this.buttonIcon ? 'button--icon--'+this.buttonIconPlacement : ''}`,
  //     `${!this.buttonText && this.buttonIcon ? 'button--icon--only' : ''}`
  //   ].filter((d) => !!d);

  //   console.log('buttonClasses: ', this.buttonDisplayClasses);

  //   if(this.buttonIcon) {
  //     this.iconContext = this.buttonText ? this.buttonIconPlacement : 'iconOnly';
  //   }

  //   this.textTransform = this.tokenService.getTokenValue(
  //     `--component-style-button-${this.buttonSize}-text-transform`
  //   ) as TextTransform;
  // }

  createButton(): UIButton {
    return <UIButton>{
      buttonClick: this.buttonClick,
      buttonText: this.buttonText,
      buttonIcon: this.buttonIcon,
      buttonIconPlacement: this.buttonIconPlacement,
      buttonType: this.buttonType,
      buttonSize: this.buttonSize,
      buttonDisabled: this.buttonDisabled,
      href: this.href,
      target: '',
      buttonDisplayClasses: [
        `type-${this.buttonType}`,
        `size-${this.buttonSize}`,
        `${this.buttonIcon ? 'button--has-icon': ''}`,
        `${this.buttonFullWidth ? 'button--full-width': ''}`,
      `${this.buttonText && this.buttonIcon ? 'button--icon--'+this.buttonIconPlacement : ''}`,
      `${!this.buttonText && this.buttonIcon ? 'button--icon--only' : ''}`
      ]
        .filter((d) => !!d)
    };
  }

  ngOnChanges(): void {
      this.button = this.createButton();
      console.log(this.button);
      this.changes.markForCheck();
  }

  ngOnInit(): void {
    this.button = this.createButton();
  }
}
