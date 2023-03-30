import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
import { CopyrightDirective } from './directives/copyright.directive';
import { NumericDirective } from './directives/numeric.directive';
import { PermissionDirective } from './directives/permission.directive';

@NgModule({
  declarations: [
    AppComponent,
    CopyrightDirective,
    NumericDirective,
    PermissionDirective,
  ],
  imports: [BrowserModule, ProductsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
