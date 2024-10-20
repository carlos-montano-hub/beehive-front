import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NgZorroModule } from '../../../ng-zorro-module/ng-zorro.module';
@Component({
  selector: 'app-side-menu',
  standalone: true,
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css',
  imports: [NzIconModule, CommonModule, NgZorroModule],
})
export class SideMenuComponent {
  @Input() isMenuOpen = false;

  @Output() isMenuOpenChange = new EventEmitter<boolean>();

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.isMenuOpenChange.emit(this.isMenuOpen);
  }
}
