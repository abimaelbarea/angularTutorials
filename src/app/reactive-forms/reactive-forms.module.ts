import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsRoutingModule } from './reactive-forms-routing.module';
import { ReactiveFormsComponent } from './reactive-forms.component';


@NgModule({
  declarations: [
    ReactiveFormsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsRoutingModule
  ]
})
export class ReactiveFormsModule { }
