import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Product } from '../datatypes/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css'],
})
export class ProductCreateComponent {
  @Output() added = new EventEmitter<Product>();

  constructor(
    private productsService: ProductsService,
    private formBuilder: FormBuilder
  ) {}

  productForm:
    | FormGroup<{
        name: FormControl<string>;
        price: FormControl<number | undefined>;
      }>
    | undefined;

  private buildForm() {
    this.productForm = this.formBuilder.nonNullable.group({
      name: this.formBuilder.nonNullable.control(''),
      price: this.formBuilder.nonNullable.control<number | undefined>(
        undefined,
        {}
      ),
    });
  }

  // productForm = new FormGroup({
  //   name: new FormControl('', { nonNullable: true }),
  //   price: new FormControl<number | undefined>(undefined, {
  //     nonNullable: true,
  //   }),
  //   info: new FormGroup({
  //     category: new FormControl(''),
  //     description: new FormControl(''),
  //     image: new FormControl(''),
  //   }),
  // });

  get name() {
    return this.productForm!.controls.name;
  }
  get price() {
    return this.productForm!.controls.price;
  }

  createProduct() {
    console.log(' component createProduct invoked!');
    let msg = `created product: ${this.name.value}, price: ${this.price.value}`;
    alert(msg);
    this.productsService
      .addProduct(this.name.value, Number(this.price.value))
      .subscribe((product) => {
        this.productForm!.reset();
        this.added.emit(product);
      });
  }
}
