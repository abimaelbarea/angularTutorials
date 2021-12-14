import { CommonModule } from '@angular/common';
import { CustomComponentComponent } from './custom-component.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [CustomComponentComponent],
  imports: [CommonModule],
  exports: [CustomComponentComponent],
})
export class CustomComponentModule {}
