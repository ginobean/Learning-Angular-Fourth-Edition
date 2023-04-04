import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartComponent } from './components/cart.component';
import { FavoritesComponent } from './components/favorites.component';
import { ProductCreateComponent } from './components/product-create.component';
import { ProductDetailComponent } from './components/product-detail.component';
import { ProductListComponent } from './components/product-list.component';
import { ProductViewComponent } from './components/product-view.component';
import { ProductsComponent } from './components/products.component';
import { SortProductsPipe } from './pipes/sort-products.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    SortProductsPipe,
    FavoritesComponent,
    ProductViewComponent,
    ProductCreateComponent,
    CartComponent,
    ProductsComponent,
  ],
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  exports: [ProductListComponent],
})
export class ProductsModule {}
