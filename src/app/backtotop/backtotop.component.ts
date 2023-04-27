import { Component, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-backtotop',
  templateUrl: './backtotop.component.html',
  styleUrls: ['./backtotop.component.scss'],
})
export class BacktotopComponent {
  constructor() {}

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
