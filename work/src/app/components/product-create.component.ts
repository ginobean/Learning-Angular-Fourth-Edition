import { Component } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';
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

  createProduct(name: string, price: string) {
    console.log(' component createProduct invoked!');
    this.productsService
      .addProduct(name, Number(price))
      .subscribe((product) => {
        this.added.emit(product);
      });
  }
}
