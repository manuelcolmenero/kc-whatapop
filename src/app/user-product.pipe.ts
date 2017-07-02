  /*
    Brick Red Path:
    Se filtra el listado de productos por vendedor
  */
import { Pipe, PipeTransform } from '@angular/core';

import { Product } from "./product";


@Pipe({
  name: 'userProduct'
})
export class UserProductPipe implements PipeTransform {

  transform(products: Product[], userId: number): Product[] {
  /*
    El objeto array posee un método de filtrado que, pasandole un callback devuelve el listado 
    filtrado por el valor que se desea.

    En este caso se filtra el producto.seller.id. Al ser un campo númerico y el indexOf no 
    funcionar con ellos, se transforma a string todos los valores para que pueda funcionar.
  */
    return products.filter(product => product.seller.id.toString().indexOf(userId.toString()) !== -1);
  }

}
