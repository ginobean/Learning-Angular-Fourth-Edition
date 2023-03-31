import { Injectable } from '@angular/core';
import { Product } from '../products/product';
import { Observable, take, of, map, switchMap, from, filter } from 'rxjs';
import { HttpClient } from '@angular/common/http';

interface ProductDTO {
  id: number;
  title: string;
  price: number;
}

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private productsUrl = 'https://fakestoreapi.com/products';

  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<ProductDTO[]>(this.productsUrl).pipe(
      map((products) =>
        products.map((product) => {
          return {
            id: product.id,
            name: product.title,
            price: product.price,
          };
        })
      )
    );
  }

  getProduct(id: number): Observable<Product> {
    return this.getProducts().pipe(
      switchMap((listOfProducts) => from(listOfProducts)),
      filter((p) => p.id === id),
      take(1)
    );
  }
}
