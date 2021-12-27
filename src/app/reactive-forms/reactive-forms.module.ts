import { CommonModule } from '@angular/common';
import { CustomComponentAndDirectiveModule } from '../shared/custom-component-and-directive/custom-component-and-directive.module';
import { CustomComponentModule } from '../shared/custom-component/custom-component.module';
import { NgModule } from '@angular/core';
import { ReactiveFormsComponent } from './reactive-forms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormsRoutingModule } from './reactive-forms-routing.module';

@NgModule({
  declarations: [ReactiveFormsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ReactiveFormsRoutingModule,
    CustomComponentModule,
    CustomComponentAndDirectiveModule,
  ],
})
export class ReactiveFormModule {}
