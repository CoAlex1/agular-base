import { Component, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'portofolio';
  showBackToTop = false;

  constructor(private renderer: Renderer2, ) {
    this.renderer.listen('window', 'scroll', (e) => {
      if (window.pageYOffset > 150) {
        this.showBackToTop = true;
      } else {
        this.showBackToTop = false;
      }
    });
  }
}
