import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lib-oasys-lib',
  template: `
    <p class="test-style">
      oasys-lib works locally!!!!
    </p>
    <button>Button</button>
  `,
  styleUrls: [
    '../styles.css',
    '../theme.css'
  ],
  encapsulation: ViewEncapsulation.None
})
export class OasysLibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
