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
  constructor(injector: Injector) {
    const el = createCustomElement(GreeterComponent, { injector });
    customElements.define('do-greet', el);
  }

  ngDoBootstrap() {}
}
