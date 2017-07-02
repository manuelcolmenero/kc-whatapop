  /*
    Brick Red Path:
    Componenete para gestionar el listado de productos por vendedor
  */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/switchMap';

import { User } from '../user';
import { UserService } from '../user.service';

import { Product } from '../product';
import { ProductFilter } from '../product-filter';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})

export class UserDetailsComponent implements OnDestroy, OnInit {

  user: User;
  products: Product[];
  private _userSubscription: Subscription;

  private _filterStream$: Subject<ProductFilter> = new Subject;

  constructor(
    private _userService: UserService,
    private _productService: ProductService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit(): void {
    this._route.data.forEach((data: { user: User }) => this.user = data.user);
    this._filterStream$
      .switchMap((filter: ProductFilter) => this._productService.getProducts(filter))
      .subscribe((products: Product[]) => this.products = products);
    this.filterCollection(null);
    window.scrollTo(0, 0);
  }

  filterCollection(filter: ProductFilter): void {
    this._filterStream$.next(filter);
  }

  ngOnDestroy(): void {
    if (this._userSubscription) {
      this._userSubscription.unsubscribe();
    }
  }

  // Se habilita el boton volver
  goBack(): void {
    window.history.back();
  }

  // Se habilita la navegación al detalle de productos
  navigateDetail(productDetail: Product): void {
    this._router.navigate(['/products', productDetail.id]);
  }

}