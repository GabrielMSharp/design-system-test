import { ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { TextTransform } from './text';

@Component({
  selector:'ui-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextComponent implements OnInit {

  @Input() textAlign: 'left' | 'center' | 'right' = 'left';
  @Input() textWeight: 'normal' | 'medium' | 'bold' = 'normal';
  @Input() textTransform: TextTransform = 'none';

  uiTextClasses!: string;

  constructor() { }

  ngOnInit(): void {
    this.uiTextClasses = [
      `ui-text--align-${this.textAlign}`,
      `ui-text--weight-${this.textWeight}`,
      `ui-text--transform-${this.textTransform}`,
    ].join(' ');
  }

}
