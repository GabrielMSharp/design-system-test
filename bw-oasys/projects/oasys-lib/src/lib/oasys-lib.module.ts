import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';
import { LayoutBoxComponent } from './components/layout-box/layout-box.component';
import { LayoutInlineComponent } from './components/layout-inline/layout-inline.component';
import { TextComponent } from './components/text/text.component';
import { IconComponent } from './components/icon/icon.component';


@NgModule({
  declarations: [
    ButtonComponent,
    LayoutBoxComponent,
    LayoutInlineComponent,
    TextComponent,
    IconComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ButtonComponent
  ]
})
export class OasysLibModule { }
