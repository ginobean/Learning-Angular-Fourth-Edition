import { Directive, OnInit, ViewContainerRef } from '@angular/core';
import { ProductDetailComponent } from '../components/product-detail.component';

@Directive({
  selector: '[appProductHost]',
})
export class ProductHostDirective implements OnInit {
  constructor(private vc: ViewContainerRef) {}

  ngOnInit(): void {
    const productRef = this.vc.createComponent(ProductDetailComponent);
    productRef.setInput('product', {
      name: 'Optical mouse',
      price: 130,
    });
  }
}
