import { ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lib-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextComponent implements OnInit {

  @Input() align: 'left'|'center'|'right' = 'left';

  uiTextClasses: string[] = [
    `ui-text--align-${this.align}`
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
