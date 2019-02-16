import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Angular elements</h1>
    <div id="container"></div>
    <button (click)="addGreeter()">Add greeter</button>
  `,
  styles: []
})
export class AppComponent {
  addGreeter() {
    const container = document.getElementById('container');
    container.innerHTML = '<do-greeter></do-greeter>';
  }
}
