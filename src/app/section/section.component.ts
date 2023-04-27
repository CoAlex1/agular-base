import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
})
export class SectionComponent {
  @Input()
  title!: string;
  @Input()
  content!: string;
  @Input()
  width!: string;
  @Input() otherStyles: any;
  @Input() height!: string;
}
