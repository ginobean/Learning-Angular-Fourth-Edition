import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from '../components/app.component';
import { CopyrightDirective } from '../directives/copyright.directive';
import { NumericDirective } from '../directives/numeric.directive';
import { PermissionDirective } from '../directives/permission.directive';
import { ProductsModule } from './products.module';

@NgModule({
  declarations: [
    AppComponent,
    CopyrightDirective,
    NumericDirective,
    PermissionDirective,
  ],
  imports: [BrowserModule, ProductsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
