import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FavoritesComponent } from './components/favorites.component';
import { ProductCreateComponent } from './components/product-create.component';
import { ProductDetailComponent } from './components/product-detail.component';
import { ProductListComponent } from './components/product-list.component';
import { ProductViewComponent } from './components/product-view.component';
import { SortProductsPipe } from './pipes/sort-products.pipe';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    SortProductsPipe,
    FavoritesComponent,
    ProductViewComponent,
    ProductCreateComponent,
  ],
  imports: [CommonModule],
  exports: [ProductListComponent],
})
export class ProductsModule {}
