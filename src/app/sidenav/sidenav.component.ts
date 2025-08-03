import {Component, EventEmitter, HostListener, OnInit, Output} from '@angular/core';
import {navbarData} from "./nav-data";
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {RouterLink, RouterLinkActive} from "@angular/router";

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}


@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink,
    NgClass,
    NgIf,
    RouterLinkActive,
  ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',

})
export class SidenavComponent implements OnInit {



  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();

  collapsed = false;
  screenWidth = 0;
  navData = navbarData;
  showLogoText = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    if(this.screenWidth <= 768 ) {
      this.collapsed = false;
      this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
    }
  }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});

    if (this.collapsed) {
      // Aguarda 0.5s para mostrar o texto "Healfin"
      setTimeout(() => {
        this.showLogoText = true;
      }, 200);
    } else {
      // Esconde imediatamente ao recolher o menu
      this.showLogoText = false;
    }
  }


  // closeSidenav(): void {
  //   this.collapsed = false;
  //   this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  // }
}
