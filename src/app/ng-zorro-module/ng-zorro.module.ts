import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// NG-Zorro modules
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NzLayoutModule,
    NzButtonModule,
    NzGridModule,
    NzMenuModule,
    NzIconModule,
  ],
  exports: [
    NzLayoutModule,
    NzButtonModule,
    NzGridModule,
    NzMenuModule,
    NzIconModule,
  ],
})
export class NgZorroModule {}
