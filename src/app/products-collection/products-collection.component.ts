import { Component, OnDestroy, OnInit } from '@angular/core';

// GreenPath: Se incluye el Router para poder navegar
import { Router } from '@angular/router';

import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/switchMap';

import { Product } from '../product';
import { ProductFilter } from '../product-filter';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products-collection',
  templateUrl: './products-collection.component.html',
  styleUrls: ['./products-collection.component.css']
})
export class ProductsCollectionComponent implements OnDestroy, OnInit {

  products: Product[];
  private _filterStream$: Subject<ProductFilter> = new Subject;

  constructor(
    private _productService: ProductService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this._filterStream$
      .switchMap((filter: ProductFilter) => this._productService.getProducts(filter))
      .subscribe((products: Product[]) => this.products = products);
    this.filterCollection(null);
  }

  ngOnDestroy(): void {
    this._filterStream$.unsubscribe();
  }

  filterCollection(filter: ProductFilter): void {
    this._filterStream$.next(filter);
  }

  /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
  | Green Path                                                       |
  |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
  | Maneja el evento del componente ProductComponent que indica la   |
  | selección de un producto y navega a la dirección correspondiente.|
  | Recuerda que para hacer esto necesitas inyectar como dependencia |
  | el Router de la app. La ruta a navegar es '/products', pasando   |
  | como parámetro el identificador del producto.                    |
  |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/


  navigateDetail(productDetail: Product): void {
    
    alert("Incluir routing de navegación: " + productDetail.id);
    this._router.navigate(['/products', productDetail.id]);
  }
}
