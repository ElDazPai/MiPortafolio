import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-section-one',
  templateUrl: './section-one.component.html',
  styleUrls: ['./section-one.component.css']
})
export class SectionOneComponent {
  constructor(private viewportScroller: ViewportScroller) {}

  scrollTo(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }
}
