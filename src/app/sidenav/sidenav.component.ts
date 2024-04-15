import {Component, EventEmitter, Output} from '@angular/core';
import {navbarData} from "./nav-data";
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {RouterLink, RouterLinkActive} from "@angular/router";




@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink,
    NgClass,
    NgIf,
    RouterLinkActive
  ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {

  @Output() onToggleSideNav = new EventEmitter();
  collapsed = false;
  screenWidth = 0;
  navData = navbarData;

  toggleCollapse() {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth})
  }

  closeSidenav() {
    this.collapsed = false;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth})
  }


}
