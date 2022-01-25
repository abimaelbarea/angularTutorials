import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleContentComponent } from './simple-content.component';



@NgModule({
  declarations: [
    SimpleContentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SimpleContentComponent
  ]
})
export class SimpleContentModule { }
