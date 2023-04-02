import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { Product } from '../datatypes/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css'],
})
export class ProductCreateComponent {
  @Output() added = new EventEmitter<Product>();

  constructor(private productsService: ProductsService) {}

  createProduct(name: string, price: number) {
    console.log(' component createProduct invoked!');
    alert(`created product ${name} : ${price}`);
    this.productsService.addProduct(name, price).subscribe((product) => {
      this.added.emit(product);
    });
  }
}
