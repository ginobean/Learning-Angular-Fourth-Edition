import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { CartComponent } from './components/cart.component';
import { FavoritesComponent } from './components/favorites.component';
import { ProductCreateComponent } from './components/product-create.component';
import { ProductDetailComponent } from './components/product-detail.component';
import { ProductListComponent } from './components/product-list.component';
import { ProductViewComponent } from './components/product-view.component';
import { ProductsComponent } from './components/products.component';
import { SortProductsPipe } from './pipes/sort-products.pipe';

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
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [ProductListComponent],
})
export class ProductsModule {}
