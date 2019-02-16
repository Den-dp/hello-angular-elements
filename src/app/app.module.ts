import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, DoBootstrap } from '@angular/core';

import { GreeterComponent } from './greeter/greeter.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    GreeterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [
    GreeterComponent
  ]
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const el = createCustomElement(GreeterComponent, { injector: this.injector });
    customElements.define('do-greet', el);
  }
}
