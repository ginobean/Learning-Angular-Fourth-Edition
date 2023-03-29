import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css'],
})
export class ProductViewComponent implements OnInit {
  @Input() id = -1;
  name: string = '';

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    const product = this.productsService.getProduct(this.id);
    if (product) {
      this.name = product.name;
    }
  }
}
