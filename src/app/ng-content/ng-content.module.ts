import { CommonModule } from '@angular/common';
import { MultiContentModule } from './multi-content/multi-content.module';
import { NgContentComponent } from './ng-content.component';
import { NgContentRoutingModule } from './ng-content-routing.module';
import { NgModule } from '@angular/core';
import { SimpleContentModule } from './simple-content/simple-content.module';

@NgModule({
  declarations: [NgContentComponent],
  imports: [CommonModule, NgContentRoutingModule, SimpleContentModule, MultiContentModule],
})
export class NgContentModule {}
