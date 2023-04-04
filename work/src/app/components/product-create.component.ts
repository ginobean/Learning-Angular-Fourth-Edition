import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Product } from '../datatypes/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css'],
})
export class ProductCreateComponent {
  @Output() added = new EventEmitter<Product>();

  productForm = new FormGroup({
    name: new FormControl('', { nonNullable: true }),
    price: new FormControl<number | undefined>(undefined, {
      nonNullable: true,
    }),
    info: new FormGroup({
      category: new FormControl(''),
      description: new FormControl(''),
      image: new FormControl(''),
    }),
  });

  get name() {
    return this.productForm.controls.name;
  }
  get price() {
    return this.productForm.controls.price;
  }

  constructor(private productsService: ProductsService) {}

  createProduct() {
    console.log(' component createProduct invoked!');
    let msg = `created product: ${this.name.value}, price: ${this.price.value}`;
    alert(msg);
    this.productsService
      .addProduct(this.name.value, Number(this.price.value))
      .subscribe((product) => {
        this.productForm.reset();
        this.added.emit(product);
      });
  }
}
