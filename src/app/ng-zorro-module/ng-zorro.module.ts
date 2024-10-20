import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// NG-Zorro modules
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(
  (key) => antDesignIcons[key]
);
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NzLayoutModule,
    NzButtonModule,
    NzGridModule,
    NzMenuModule,
    NzIconModule.forRoot(icons),
  ],
  exports: [
    NzLayoutModule,
    NzButtonModule,
    NzIconModule,
    NzGridModule,
    NzMenuModule,
  ],
})
export class NgZorroModule {}
