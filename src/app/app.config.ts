import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideNzIcons } from 'ng-zorro-antd/icon';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideNzIcons([])],
};
