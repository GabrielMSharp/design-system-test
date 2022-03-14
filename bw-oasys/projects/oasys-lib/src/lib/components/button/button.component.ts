import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lib-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ButtonComponent implements OnInit {

  @Input() buttonText: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
