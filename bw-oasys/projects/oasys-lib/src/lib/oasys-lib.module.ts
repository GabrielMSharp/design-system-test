import { NgModule } from '@angular/core';
import { OasysLibComponent } from './oasys-lib.component';
import { ButtonComponent } from './components/button/button.component';



@NgModule({
  declarations: [
    OasysLibComponent,
    ButtonComponent
  ],
  imports: [
  ],
  exports: [
    OasysLibComponent,
    ButtonComponent
  ]
})
export class OasysLibModule { }
