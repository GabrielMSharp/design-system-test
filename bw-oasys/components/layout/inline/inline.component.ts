import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector:'ui-inline',
  templateUrl: './inline.component.html',
  styleUrls: ['./inline.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutInlineComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
