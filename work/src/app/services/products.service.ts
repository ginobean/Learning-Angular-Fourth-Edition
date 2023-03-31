import { Injectable } from '@angular/core';
import { Product } from '../products/product';
import { Observable, of, map, switchMap, from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor() {}

  private products = [
    {
      id: 1,
      name: 'Webcam',
      price: 100,
    },
    {
      id: 2,
      name: 'Microphone',
      price: 200,
    },
    {
      id: 3,
      name: 'Wireless Keyboard',
      price: 85,
    },
  ];

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getProduct(id: number): Observable<Product> {
    // TODO: filter result of switchMap, to only include those product(s) that match on id.
    return this.getProducts().pipe(
      switchMap((listOfProducts) => from(listOfProducts))
    );
  }

  // return this.getProducts().pipe(
  //   switchMap((listOfProducts) => of(listOfProducts.find((p) => p.id === id)))
  // );
}
