
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OasysButtonComponent, IconComponent } from 'projects/oasys-lib/src/public-api';


const OasysComponents = [
  OasysButtonComponent,
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
