import { CameraComponent } from './camera.component';
import { CameraRoutingModule } from './camera-routing.module';
import { CommonModule } from '@angular/common';
import { MediaStreamModule } from './mediaStream/media-stream.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    CameraComponent
  ],
  imports: [
    CommonModule,
    CameraRoutingModule,
    MediaStreamModule
  ]
})
export class CameraModule { }
