import { CommonModule } from '@angular/common';
import { CustomComponentAndDirectiveModule } from '../shared/custom-component-and-directive/custom-component-and-directive.module';
import { CustomComponentModule } from '../shared/custom-component/custom-component.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { TemplateFormsComponent } from './template-forms.component';
import { TemplateFormsRoutingModule } from './template-forms-routing.module';

@NgModule({
  declarations: [TemplateFormsComponent],
  imports: [
    CommonModule,
    FormsModule,
    CustomComponentModule,
    CustomComponentAndDirectiveModule,
    TemplateFormsRoutingModule,
  ],
})
export class TemplateFormsModule {}
