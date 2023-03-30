import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SortProductsPipe } from '../pipes/sort-products.pipe';
import { FavoritesComponent } from './favorites/favorites.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductHostDirective } from './product-host.directive';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductViewComponent } from './product-view/product-view.component';

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
