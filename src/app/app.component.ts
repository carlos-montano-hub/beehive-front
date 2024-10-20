import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './features/nav-bar/nav-bar.component';
import { SideMenuComponent } from './features/nav-bar/side-menu/side-menu.component';
import { NgZorroModule } from './ng-zorro-module/ng-zorro.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SideMenuComponent, NavBarComponent, NgZorroModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'bumblebee-guard';
}
