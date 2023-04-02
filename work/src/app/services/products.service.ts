import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, filter, from, map, switchMap, take } from 'rxjs';
import { Product } from '../datatypes/product';

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

  convertToProduct = (product: ProductDTO) => {
    return {
      id: product.id,
      name: product.title,
      price: product.price,
    };
  };

  addProduct(name: string, price: number): Observable<Product> {
    return this.httpClient
      .post<ProductDTO>(this.productsUrl, {
        title: name,
        price: price,
      })
      .pipe(map((dto) => this.convertToProduct(dto)));
  }

  updateProduct(id: number, price: number): Observable<void> {
    return this.httpClient.patch<void>(`${this.productsUrl}/${id}`, { price });
  }
}
