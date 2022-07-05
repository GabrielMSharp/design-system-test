
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent, IconComponent } from 'projects/oasys-lib/src/public-api';


const OasysComponents = [
  ButtonComponent,
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
