import { Injectable } from '@angular/core';
import { Product } from '../products/product';
import { Observable, of, map, switchMap, from, filter } from 'rxjs';
import { take } from 'rxjs';

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
    return this.getProducts().pipe(
      switchMap((listOfProducts) => from(listOfProducts)),
      filter((p) => p.id === id),
      take(1)
    );
  }
}
