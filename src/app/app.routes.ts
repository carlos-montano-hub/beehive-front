import { Routes } from '@angular/router';
import { StatusComponent } from './pages/status/status.component';

export const routes: Routes = [
  { path: 'status', component: StatusComponent },
  { path: '**', component: StatusComponent },
];
