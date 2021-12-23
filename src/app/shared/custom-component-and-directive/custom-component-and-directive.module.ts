import { CommonModule } from '@angular/common';
import { CustomComponentAndDirectiveComponent } from './custom-component-and-directive.component';
import { CustomComponentDirective } from './custom-component-and-directive.component.directive';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    CustomComponentAndDirectiveComponent,
    CustomComponentDirective,
  ],
  imports: [CommonModule],
  exports: [CustomComponentAndDirectiveComponent, CustomComponentDirective],
})
export class CustomComponentAndDirectiveModule {}
