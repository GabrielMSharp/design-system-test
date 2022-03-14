import { NgModule } from '@angular/core';
// import { OasysLibComponent } from './oasys-lib.component';
import { ButtonComponent } from './components/button/button.component';
import { LayoutBoxComponent } from './components/layout-box/layout-box.component';
import { LayoutInlineComponent } from './components/layout-inline/layout-inline.component';



@NgModule({
  declarations: [
    // OasysLibComponent,
    ButtonComponent,
    LayoutBoxComponent,
    LayoutInlineComponent
  ],
  imports: [
  ],
  exports: [
    // OasysLibComponent,
    ButtonComponent
  ]
})
export class OasysLibModule { }
