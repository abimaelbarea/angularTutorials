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
    path: 'component-as-directive',
    loadChildren: () =>
      import('./component-as-directive/component-as-directive.module').then(
        (m) => m.ComponentAsDirectiveModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
