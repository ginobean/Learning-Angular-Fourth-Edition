import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart.component';
import { PageNotFoundComponent } from './components/page-not-found.component';
import { ProductDetailComponent } from './components/product-detail.component';
import { ProductListComponent } from './components/product-list.component';
import { authGuard } from './guards/auth.guard';
import { checkoutGuard } from './guards/checkout.guard';

const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  {
    path: 'products',
    component: ProductListComponent,
    children: [{ path: ':id', component: ProductDetailComponent }],
  },
  {
    path: 'cart',
    component: CartComponent,
    canActivate: [authGuard],
    canDeactivate: [checkoutGuard],
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./components/about-info.component').then(
        (c) => c.AboutInfoComponent
      ),
    canMatch: [authGuard],
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
