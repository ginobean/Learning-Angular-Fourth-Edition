import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../datatypes/product';
import { ProductsService } from '../services/products.service';
import { ProductDetailComponent } from './product-detail.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements AfterViewInit, OnInit {
  selectedProduct: Product | undefined;
  @ViewChild(ProductDetailComponent) productDetail:
    | ProductDetailComponent
    | undefined;
  products$: Observable<Product[]> | undefined;

  constructor(private productsService: ProductsService) {}

  ngAfterViewInit(): void {
    if (this.productDetail) {
      console.log(this.productDetail.product);
    }
  }

  ngOnInit(): void {
    this.products$ = this.productsService.getProducts();
  }

  onBuy() {
    window.alert(`You just bought ${this.selectedProduct?.name}!`);
  }

  showAdded(event: Product) {
    console.log('added ' + JSON.stringify(event));
  }
}
