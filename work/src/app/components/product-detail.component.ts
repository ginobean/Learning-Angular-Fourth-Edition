import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Product } from '../datatypes/product';
import { AuthService } from '../services/auth.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  product$: Observable<Product> | undefined;
  @Output() bought = new EventEmitter();
  @ViewChild('price', { static: false }) priceElement: ElementRef | undefined;

  currentProduct: Product | undefined;

  constructor(
    private productsService: ProductsService,
    public authService: AuthService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    console.log('product details component ngOnInit()');
    this.product$ = this.route.paramMap.pipe(
      switchMap((params) => {
        return this.productsService.getProduct(Number(params.get('id')));
      })
    );

    this.product$.subscribe((p) => {
      this.currentProduct = p;
      console.log('new product detail = ' + p.name);
    });
  }

  changePrice(product: Product, price: number) {
    this.productsService.updateProduct(product.id, price).subscribe(() => {
      alert(`The price of ${product.name} was changed to: ${price}`);
    });
  }

  buy() {
    this.bought.emit();
  }
}
