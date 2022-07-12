import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OasysButtonComponent } from './components/button/button.component';
import { LayoutInlineComponent } from './components/layout/inline/inline.component';
import { IconComponent } from './components/icon/icon.component';
import { LayoutBoxComponent } from './components/layout/box/box.component';
import { WindowService } from './services/window.service';
import { TokenService } from './services/token.service';



@NgModule({
  declarations: [
    OasysButtonComponent,
    LayoutInlineComponent,
    IconComponent,
    LayoutBoxComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([])
  ],
  exports: [
    OasysButtonComponent,
    LayoutBoxComponent
  ],
  providers: [
    WindowService,
    TokenService,
    {provide: APP_BASE_HREF, useValue: '/'}
  ]
})
export class OasysLibModule { }
