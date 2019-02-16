import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'do-greeter',
  template: `
    <div>Hi there!</div>
  `,
  styleUrls: ['./greeter.component.css']
})
export class GreeterComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
