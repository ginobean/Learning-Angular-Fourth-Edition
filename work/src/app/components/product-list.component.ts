import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Observable, Subject, finalize } from 'rxjs';
import { Product } from '../datatypes/product';
import { ProductsService } from '../services/products.service';
import { ProductDetailComponent } from './product-detail.component';

@UntilDestroy()
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements AfterViewInit, OnInit {
  currentProduct: Product | undefined;
  selectedProduct$ = new Subject<Product>();
  @ViewChild(ProductDetailComponent) productDetail:
    | ProductDetailComponent
    | undefined;
  products$: Observable<Product[]> | undefined;

  constructor(private productsService: ProductsService) {}

  ngAfterViewInit(): void {}

  ngOnInit(): void {
    this.products$ = this.productsService.getProducts();
    this.selectedProduct$
      .pipe(
        untilDestroyed(this),
        finalize(() => console.log('product-list subscription finalized'))
      )
      .subscribe((p) => {
        this.currentProduct = p;
        console.log('prod list new selected product = ' + p.name);
      });
  }

  onBuy() {
    window.alert(`You just bought ${this.currentProduct?.name}!`);
  }

  showAdded(event: Product) {
    console.log('added ' + JSON.stringify(event));
  }
}
