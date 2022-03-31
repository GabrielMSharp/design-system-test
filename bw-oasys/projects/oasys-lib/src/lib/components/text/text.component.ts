import { ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lib-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextComponent implements OnInit {

  @Input() textAlign: 'left' | 'center' | 'right' = 'left';
  @Input() textWeight: 'normal' | 'medium' | 'bold' = 'normal';

  uiTextClasses: string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.uiTextClasses = [
      `ui-text--align-${this.textAlign}`,
      `ui-text--weight-${this.textWeight}`
    ]
  }

}
