import { Component, Input, OnInit, Output, ViewEncapsulation, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef, OnChanges } from '@angular/core';
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
export class OasysButtonComponent implements OnInit, OnChanges {

  button: UIButton;

  // // Button Content
  @Input() buttonIcon?: IconNames;
  @Input() buttonIconPlacement: IconContext = 'leading';

  // @Input() buttonText: string;
  // @ContentChild('buttonTextContent') buttonText: ElementRef;

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
      `${this.buttonIcon ? 'button--icon--'+this.buttonIconPlacement : ''}`
      ].filter((d) => !!d)
    };
  }

  ngOnChanges(): void {
    console.log(this.button);
      this.button = this.createButton();
      this.changes.markForCheck();
  }

  ngOnInit(): void {
    this.button = this.createButton();
  }
}
