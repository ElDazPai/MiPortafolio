import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isMenuCollapsed = true;

  constructor(private viewportScroller: ViewportScroller) {}

  scrollTo(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
    this.isMenuCollapsed = true;
  }
}
