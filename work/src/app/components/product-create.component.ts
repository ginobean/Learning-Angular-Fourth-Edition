import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Observable, filter, finalize, map, of } from 'rxjs';
import { Product } from '../datatypes/product';
import { ProductsService } from '../services/products.service';

export const priceRangeValidator = (
  control: AbstractControl<number>
): Observable<ValidationErrors | null> => {
  const inRange = control.value > 1 && control.value < 10000;
  return of(inRange ? null : { outOfRange: true });
};

@UntilDestroy()
@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css'],
})
export class ProductCreateComponent implements OnInit {
  @Output() added = new EventEmitter<Product>();
  products: Product[] = [];
  products$: Observable<Product[]> | undefined;

  constructor(
    private productsService: ProductsService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.productsService
      .getProducts()
      .pipe(
        untilDestroyed(this),
        finalize(() => console.log('product-create subscription was finalized'))
      )
      .subscribe((products) => {
        this.products = products;
      });

    this.products$ = this.name.valueChanges.pipe(
      filter((name) => name !== null),
      map((name) =>
        this.products.filter((product) =>
          product.name.toLocaleLowerCase().includes(name!.toLocaleLowerCase())
        )
      )
    );
  }

  productForm = this.formBuilder.group({
    name: ['', Validators.required],
    price: ['', Validators.required, priceRangeValidator],
    info: this.formBuilder.group({
      category: [''],
      description: [''],
      image: [''],
    }),
  });

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
      .addProduct(this.name.value!, Number(this.price.value))
      .subscribe((product) => {
        this.productForm!.reset();
        this.added.emit(product);
      });
  }
}
