import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RowComponent } from './row.component';

@NgModule({
  declarations: [
    RowComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    RowComponent
  ]
})
export class RowModule { }
