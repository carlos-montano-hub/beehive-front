import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  GoogleMap,
  GoogleMapsModule,
  MapRectangle,
} from '@angular/google-maps';
import { NgxGaugeModule } from 'ngx-gauge';
import { NgZorroModule } from './ng-zorro.module';
@NgModule({
  declarations: [],
  imports: [CommonModule, GoogleMap, MapRectangle],
  exports: [
    NgZorroModule,
    NgxGaugeModule,
    CommonModule,
    GoogleMapsModule,
    GoogleMap,
    MapRectangle,
  ],
})
export class SharedModule {}
