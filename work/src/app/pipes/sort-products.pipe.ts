import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../product';

@Pipe({
  name: 'sortProducts',
})
export class SortProductsPipe implements PipeTransform {
  transform(value: Product[]): Product[] {
    if (value) {
      return value.sort((a: Product, b: Product) => {
        return a.name.localeCompare(b.name);
        // if (a.name < b.name) {
        //   return -1;
        // } else if (b.name < a.name) {
        //   return +1;
        // }

        // return 0;
      });
    }

    return [];
  }
}
