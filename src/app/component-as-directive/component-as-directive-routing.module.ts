import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentAsDirectiveComponent } from './component-as-directive.component';

const routes: Routes = [{ path: '', component: ComponentAsDirectiveComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentAsDirectiveRoutingModule { }
