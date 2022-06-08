import { Component, Input, OnInit, Output, ViewEncapsulation, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
// import { TokenService } from '../../services/token.service';
// import { IconNames, IconContext } from '../icon/icon';
// import { TextTransform } from '../text/text';

@Component({
  selector:'ui-button',
  template: '<button>Button</button>',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent implements OnInit {

  // // Button Content
  @Input() buttonText?: string;
  // @Input() buttonIcon?: IconNames;
  // @Input() buttonIconPlacement: IconContext = 'leading';

  // Button Stylings
  @Input() buttonSize: 'small'|'large' = 'large';
  @Input() buttonType: 'primary'|'primary-2'|'primary-3'|'secondary'|'secondary-2' = 'primary';
  
  // Button Actions
  @Input() href: string = '';
  @Output() buttonClick: EventEmitter<void> = new EventEmitter();

  buttonClasses: string = '';
  // iconContext: IconContext = 'none';
  // textTransform!: TextTransform;

  constructor( ) { }

  clickButton(): void {
    console.log('button was clicked');
    this.buttonClick.emit();
  }

  ngOnInit(): void {
    // this.buttonClasses = [
    //   `type-${this.buttonType}`,
    //   `size-${this.buttonSize}`,
    //   `${this.buttonIcon ? 'button--has-icon': ''}`,
    //   `${this.buttonText && this.buttonIcon ? 'button--icon--'+this.buttonIconPlacement : ''}`,
    //   `${!this.buttonText && this.buttonIcon ? 'button--icon--only' : ''}`
    // ].join(' ');

    // if(this.buttonIcon) {
    //   this.iconContext = this.buttonText ? this.buttonIconPlacement : 'iconOnly';
    // }

    // this.textTransform = this.tokenService.getTokenValue(
    //   `--style-button-${this.buttonSize}-text-transform`
    // ) as TextTransform;
  }

}
