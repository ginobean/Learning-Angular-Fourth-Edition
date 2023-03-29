import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { Product } from '../product';
import { ProductsService } from '../products.service';

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
  products: Product[] = [];

  constructor(private productsService: ProductsService) {}

  ngAfterViewInit(): void {
    if (this.productDetail) {
      console.log(this.productDetail.product);
    }
  }

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
  }

  onBuy() {
    window.alert(`You just bought ${this.selectedProduct?.name}!`);
  }
}
