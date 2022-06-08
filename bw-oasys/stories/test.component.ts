import { Component, Input, OnInit, Output, ViewEncapsulation, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector:'ui-test',
  template: '<p>Test Works</p>',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestComponent implements OnInit {

  ngOnInit(): void {

  }

}
