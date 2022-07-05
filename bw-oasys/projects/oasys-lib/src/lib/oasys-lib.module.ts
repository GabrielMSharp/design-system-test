import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';
import { LayoutInlineComponent } from './components/layout/inline/inline.component';
import { IconComponent } from './components/icon/icon.component';
import { LayoutBoxComponent } from './components/layout/box/box.component';
import { WindowService } from './services/window.service';



@NgModule({
  declarations: [
    ButtonComponent,
    LayoutInlineComponent,
    IconComponent,
    LayoutBoxComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot([])
  ],
  exports: [
    ButtonComponent,
    LayoutBoxComponent
  ],
  providers: [
    WindowService,
    {provide: APP_BASE_HREF, useValue: '/'}
  ]
})
export class OasysLibModule { }
