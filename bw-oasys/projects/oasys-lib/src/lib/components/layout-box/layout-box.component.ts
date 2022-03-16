import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lib-layout-box',
  templateUrl: './layout-box.component.html',
  styleUrls: ['./layout-box.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutBoxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
