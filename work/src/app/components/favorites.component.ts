import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../datatypes/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
})
export class FavoritesComponent implements OnInit {
  productsStream: Observable<Product[]> | undefined;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsStream = this.productsService.getProducts();
  }
}
