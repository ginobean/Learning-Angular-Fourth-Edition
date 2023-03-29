import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor() {}

  getProducts(): Product[] {
    return [
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
  }

  getProduct(id: number): Product | undefined {
    const products = this.getProducts();
    return products.find((p) => p.id == id);
  }
}
