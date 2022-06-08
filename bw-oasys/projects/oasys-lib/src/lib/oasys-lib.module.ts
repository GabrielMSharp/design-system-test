import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';
import { LayoutInlineComponent } from './components/layout/inline/inline.component';
import { TextComponent } from './components/text/text.component';
import { IconComponent } from './components/icon/icon.component';
import { LayoutBoxComponent } from './components/layout/box/box.component';
import { WindowService } from './services/window.service';
import { TestComponent } from 'stories/test.component';


@NgModule({
  declarations: [
    ButtonComponent,
    TestComponent,
    // LayoutInlineComponent,
    // TextComponent,
    // IconComponent,
    // LayoutBoxComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ButtonComponent,
    // TextComponent,
    // LayoutBoxComponent,
    // TextComponent,
    // LayoutBoxComponent
  ],
  providers: [
    WindowService
  ]
})
export class OasysLibModule { }
