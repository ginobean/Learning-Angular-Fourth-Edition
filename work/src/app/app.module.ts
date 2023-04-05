import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth.module';
import { AppComponent } from './components/app.component';
import { AuthComponent } from './components/auth.component';
import { PageNotFoundComponent } from './components/page-not-found.component';
import { CopyrightDirective } from './directives/copyright.directive';
import { NumericDirective } from './directives/numeric.directive';
import { PermissionDirective } from './directives/permission.directive';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { ProductsModule } from './products.module';
import { MatCommonModule } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    CopyrightDirective,
    NumericDirective,
    PermissionDirective,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    ProductsModule,
    HttpClientModule,
    AuthModule,
    AppRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCommonModule,
    BrowserAnimationsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
