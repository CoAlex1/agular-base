import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() width!: string;
  @Input() height!: string;
  @Input() otherStyles: { [key: string]: string } = {};
  @Input() title!: string;
  @Input() content: { text: string; imageSrc: string; imageAlt: string } = {
    text: '',
    imageSrc: '',
    imageAlt: '',
  };
}
