export type IconNames = 
| 'pin' 
| 'heart'
| 'basket'
;

export type IconContext = 'leading' | 'trailing' | 'iconOnly' | 'none';

export interface Icon {
  iconName: IconNames;
  iconContext: IconContext;
}
