import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from '../datatypes/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  @Input() productStream: Subject<Product> | undefined;
  @Output() bought = new EventEmitter();
  @ViewChild('price', { static: false }) priceElement: ElementRef | undefined;

  currentProduct: Product | undefined;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    if (this.productStream) {
      this.productStream!.subscribe((p) => {
        this.currentProduct = p;
        console.log('updated current product to ' + this.currentProduct?.name);
        if (this.priceElement) {
          this.priceElement!.nativeElement.value = null;
        }
      });
    }
  }

  changePrice(product: Product, price: number) {
    this.productsService.updateProduct(product.id, price).subscribe(() => {
      alert(`The price of ${product.name} was changed!`);
    });
  }

  buy() {
    this.bought.emit();
  }
}
