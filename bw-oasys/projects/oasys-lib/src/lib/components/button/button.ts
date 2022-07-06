import { EventEmitter } from '@angular/core';
import { IconNames, IconContext } from 'oasys-lib';


export type UIButtonBoolean = true | 'true' | false | 'false';

export type UIButtonSize = 'small' | 'large';

export type UIButtonType =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'primary-inverse'
  | 'secondary-inverse'
  | 'tertiary-inverse'
  | 'expressive'
  | 'danger'
  | 'facebook'
  | 'paypal'
  | 'trustpilot';

export interface UIButton {

  //_______________
  // Button Content
  buttonText: string;
  buttonIcon: IconNames;

  // color/styling of button
  buttonType: UIButtonType;

  // positioning for icon
  buttonIconPlacement: IconContext

  // button size
  buttonSize: UIButtonSize;

  // Full width
  buttonFullWidth: UIButtonBoolean;

  // click function
  buttonClick: EventEmitter<any>;

  // For links, expects relative or absolute url
  href: string;
  target: string;
  buttonDisabled: UIButtonBoolean;

  buttonDisplayClasses: string[];
}
