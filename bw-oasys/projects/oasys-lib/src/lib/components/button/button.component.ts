import { Component, Input, OnInit, Output, ViewEncapsulation, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ButtonComponent implements OnInit {

  @Input() buttonText: string = '';

  @Output() buttonDidClick: EventEmitter<void> = new EventEmitter();

  constructor() { }

  clickButton(): void {
    this.buttonDidClick.emit();
  }

  ngOnInit(): void {
  }

}
