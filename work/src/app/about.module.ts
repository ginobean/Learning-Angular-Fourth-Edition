import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AboutRoutingModule } from './about-routing.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, AboutRoutingModule],
})
export class AboutModule {
  constructor() {
    console.log('AboutModule instance has been initialized.');
  }
}
