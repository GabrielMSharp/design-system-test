import { Component, Input, OnInit, Output, ViewEncapsulation, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'lib-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent implements OnInit {

  @Input() buttonText: string = '';
  @Input() buttonSize: 'small'|'large' = 'large';
  @Input() href: string = '';

  @Input() buttonType: 'primary'|'primary-2'|'primary-3'|'secondary'|'secondary-2' = 'primary';

  @Output() buttonClick: EventEmitter<void> = new EventEmitter();

  buttonTypeClass: string = '';

  constructor() { }

  clickButton(): void {
    console.log('button was clicked');
    this.buttonClick.emit();
  }

  ngOnInit(): void {
    this.buttonTypeClass = `type-${this.buttonType}`;
  }

}
