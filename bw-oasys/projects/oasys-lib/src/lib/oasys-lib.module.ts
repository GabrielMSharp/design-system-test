import { NgModule } from '@angular/core';
import { ButtonComponent } from './components/button/button.component';
import { LayoutBoxComponent } from './components/layout-box/layout-box.component';
import { LayoutInlineComponent } from './components/layout-inline/layout-inline.component';



@NgModule({
  declarations: [
    ButtonComponent,
    LayoutBoxComponent,
    LayoutInlineComponent
  ],
  imports: [
  ],
  exports: [
    ButtonComponent
  ]
})
export class OasysLibModule { }
