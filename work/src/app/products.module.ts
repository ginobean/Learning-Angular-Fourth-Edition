import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FavoritesComponent } from './components/favorites.component';
import { ProductDetailComponent } from './components/product-detail.component';
import { ProductListComponent } from './components/product-list.component';
import { ProductViewComponent } from './components/product-view.component';
import { ProductHostDirective } from './directives/product-host.directive';
import { SortProductsPipe } from './pipes/sort-products.pipe';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    SortProductsPipe,
    ProductHostDirective,
    FavoritesComponent,
    ProductViewComponent,
  ],
  imports: [CommonModule],
  exports: [ProductListComponent],
})
export class ProductsModule {}
