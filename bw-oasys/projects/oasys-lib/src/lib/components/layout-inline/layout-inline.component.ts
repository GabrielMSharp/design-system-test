import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'oasys-layout-inline',
  templateUrl: './layout-inline.component.html',
  styleUrls: ['./layout-inline.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutInlineComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
