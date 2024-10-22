import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxGaugeModule } from 'ngx-gauge';
import { NgZorroModule } from './ng-zorro.module';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [NgZorroModule, NgxGaugeModule, CommonModule],
})
export class SharedModule {}
