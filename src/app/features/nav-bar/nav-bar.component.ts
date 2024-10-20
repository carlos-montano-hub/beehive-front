import { Component } from '@angular/core';
import { NgZorroModule } from '../../ng-zorro-module/ng-zorro.module';
import { SideMenuComponent } from './side-menu/side-menu.component';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [NgZorroModule, SideMenuComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
