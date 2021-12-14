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
        (m) => m.ReactiveFormsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
