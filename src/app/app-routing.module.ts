import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'camera',
    loadChildren: () =>
      import('./camera/camera.module').then((m) => m.CameraModule),
  },
  {
    path: 'reactive-forms',
    loadChildren: () =>
      import('./reactive-forms/reactive-forms.module').then(
        (m) => m.ReactiveFormModule
      ),
  },
  {
    path: 'template-forms',
    loadChildren: () =>
      import('./template-forms/template-forms.module').then(
        (m) => m.TemplateFormsModule
      ),
  },
  {
    path: 'ng-content',
    loadChildren: () =>
      import('./ng-content/ng-content.module').then((m) => m.NgContentModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
