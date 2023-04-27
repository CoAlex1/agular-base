import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() text: string | undefined;
  @Input() color!: string;
  @Input() backgroundColor!: string;
  @Input() borderRadius!: string;
  @Input() hoverBackgroundColor!: string;
  @Input() hoverColor!: string;
  @Input() otherStyles: { [key: string]: string } = {};
}
