import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Button, ButtonModule} from 'primeng/button';


@NgModule({
  exports: [
    ButtonModule,
    CommonModule
  ],
  declarations: []
})
export class PrimengModule { }
