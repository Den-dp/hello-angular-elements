import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  // selector: 'do-greeter',
  template: `
    <div>Hi, {{name}}!</div>
    <button (click)="doGreet()">Greet</button>
  `,
  styleUrls: ['./greeter.component.css']
})
export class GreeterComponent implements OnInit {
  @Input() name: string;
  @Output() greet = new EventEmitter();
  constructor() { }

  ngOnInit() { }

  doGreet() {
    this.greet.emit(`Hi, ${this.name}`);
  }
}
