import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { RatingComponent } from './rating.component';

@NgModule({
  declarations: [
    RatingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [RatingComponent]
})
export class AppModule {
	constructor(private injector: Injector) {
		const component = createCustomElement(RatingComponent, {injector})
		customElements.define('mt-rating', component)
	}
	ngDoBootstrap(){}
}
