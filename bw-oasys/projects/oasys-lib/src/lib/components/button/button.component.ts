import { Component, Input, OnInit, Output, ViewEncapsulation, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef, OnChanges, AfterViewInit, SimpleChanges } from '@angular/core';
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
  @Input() buttonDisabled: boolean = false;


  // Button Actions
  @Input() href: string = '';
  @Output() click: EventEmitter<void> = new EventEmitter();

  buttonDisplayClasses: string[];
  iconContext: IconContext = 'none';
  textTransform!: TextTransform;

  constructor(private changes: ChangeDetectorRef) { }

  onClick(): void {
    console.log('button was clicked');
    this.click.emit();
  }

  createButton(): UIButton {
    return <UIButton>{
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
      ].filter((d) => !!d)
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
