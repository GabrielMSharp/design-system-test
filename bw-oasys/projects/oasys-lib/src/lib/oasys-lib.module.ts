import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';
import { LayoutInlineComponent } from './components/layout-inline/layout-inline.component';
import { TextComponent } from './components/text/text.component';
import { IconComponent } from './components/icon/icon.component';
import { LayoutBoxDirective } from './directives/layout-box/layout-box.directive';


@NgModule({
  declarations: [
    ButtonComponent,
    LayoutInlineComponent,
    TextComponent,
    IconComponent,
    LayoutBoxDirective
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ButtonComponent,
    TextComponent
  ]
})
export class OasysLibModule { }
