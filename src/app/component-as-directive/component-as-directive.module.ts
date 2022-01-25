import { CommonModule } from '@angular/common';
import { ComponentAsDirectiveComponent } from './component-as-directive.component';
import { ComponentAsDirectiveRoutingModule } from './component-as-directive-routing.module';
import { HeaderModule } from './header/header.module';
import { NgModule } from '@angular/core';
import { RowModule } from './row/row.module';

@NgModule({
  declarations: [ComponentAsDirectiveComponent],
  imports: [
    CommonModule,
    ComponentAsDirectiveRoutingModule,
    RowModule,
    HeaderModule,
  ],
})
export class ComponentAsDirectiveModule {}
