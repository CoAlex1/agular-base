import { Component, HostListener, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  private readonly NAVBAR_SCROLL_THRESHOLD = 60;
  private isNavbarScrolled = false;

  @HostListener('window:scroll')
  onWindowScroll() {
    if (
      window.scrollY > this.NAVBAR_SCROLL_THRESHOLD &&
      !this.isNavbarScrolled
    ) {
      this.isNavbarScrolled = true;
      const navbar = document.querySelector('.nav');
      if (navbar) {
        navbar.classList.add('scrolled');
      }
    } else if (
      window.scrollY <= this.NAVBAR_SCROLL_THRESHOLD &&
      this.isNavbarScrolled
    ) {
      this.isNavbarScrolled = false;
      const navbar = document.querySelector('.nav');
      if (navbar) {
        navbar.classList.remove('scrolled');
      }
    }
  }

  smoothScroll(targetId: string) {
    const target = document.getElementById(targetId);
    if (target) {
      const targetTop = target.offsetTop;
      console.log('targetTop', targetTop);
      window.scrollTo({ top: targetTop, behavior: 'smooth' });
    } else {
      console.error('Target element not found:', targetId);
    }
  }
}
