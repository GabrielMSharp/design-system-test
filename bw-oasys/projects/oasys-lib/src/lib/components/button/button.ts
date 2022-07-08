import { EventEmitter } from '@angular/core';
import { IconNames, IconContext } from '../icon/icon';


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

  // Inputs

  // Display text - Required even if icon only
  buttonText: string;
  // icon name
  buttonIcon: IconNames;
  // color/styling of button
  buttonType: UIButtonType;
  // positioning for icon
  buttonIconPlacement: IconContext
  // button size
  buttonSize: UIButtonSize;
  // Full width
  buttonFullWidth: UIButtonBoolean;
  // For links, expects relative or absolute url
  href: string;
  target: string;
  buttonDisabled: UIButtonBoolean;

  // Private properties
  buttonDisplayClasses: string[];

  // Outputs

  // Click event, used when no href input
  buttonDidClick: EventEmitter<any>;
}
