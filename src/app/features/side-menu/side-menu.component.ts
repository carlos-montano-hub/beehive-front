import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SharedModule } from '../../modules/shared.module';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css',
  imports: [SharedModule],
})
export class SideMenuComponent {
  @Input() isMenuCollapsed = true;

  @Output() isMenuOpenChange = new EventEmitter<boolean>();

  toggleMenu() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
    this.isMenuOpenChange.emit(this.isMenuCollapsed);
  }
}
