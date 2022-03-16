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
  @Input() href: string = '';

  @Output() buttonClick: EventEmitter<void> = new EventEmitter();

  constructor() { }

  clickButton(): void {
    console.log('button was clicked');
    this.buttonClick.emit();
  }

  ngOnInit(): void {
  }

}
