import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './features/nav-bar/nav-bar.component';
import { SideMenuComponent } from './features/side-menu/side-menu.component';
import { SharedModule } from './modules/shared.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SharedModule, RouterOutlet, SideMenuComponent, NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'bumblebee-guard';
}
