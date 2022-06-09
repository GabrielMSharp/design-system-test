
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent, TextComponent, IconComponent } from 'projects/oasys-lib/src/public-api';


const OasysComponents = [
  ButtonComponent,
  TextComponent,
  IconComponent
];


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: OasysComponents,
  exports: OasysComponents
})
export class OasysComponentsModule { }
