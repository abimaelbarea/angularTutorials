import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgContentComponent } from './ng-content.component';

const routes: Routes = [{ path: '', component: NgContentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgContentRoutingModule { }
