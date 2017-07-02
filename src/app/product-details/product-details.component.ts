import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { ConfirmationService } from 'primeng/primeng';

import { Product } from '../product';
import { ProductService } from '../product.service';

import { FavoritesService } from '../favorites.service';

import { User } from "../user";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnDestroy, OnInit {

  product: Product;
  private _productSubscription: Subscription;

  constructor(
    private _productService: ProductService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _confirmationService: ConfirmationService,
    private _FavoriteService: FavoritesService) { }

  ngOnInit(): void {
    this._route.data.forEach((data: { product: Product }) => this.product = data.product);
    window.scrollTo(0, 0);
  }

  ngOnDestroy(): void {
    if (this._productSubscription !== undefined) {
      this._productSubscription.unsubscribe();
    }
  }

  private _buyProduct(): void {
    this._productSubscription = this._productService
      .buyProduct(this.product.id)
      .subscribe(() => this._showPurchaseConfirmation())
  }

  private _showPurchaseConfirmation(): void {
    this._confirmationService.confirm({
      rejectVisible: false,
      message: 'Producto comprado. ¡Enhorabuena!',
      accept: () => this._router.navigate(['/product'])
    });
  }

  showPurchaseWarning(): void {
    this._confirmationService.confirm({
      message: `Vas a comprar ${this.product.name}. ¿Estás seguro?`,
      accept: () => this._buyProduct()
    });
  }

  clickFavorite (productId: number): void {
    this._FavoriteService.switchFavorite(productId);
  }

  /* Broken White Path:
    Se llama a la función del servicio '_FavoriteService' pasando el 
    producto para averiguar si está en la lista de favoritos o no.
  */
  isFavorite (productId: number) {
   return this._FavoriteService.isFavorite(productId);
  }
  goBack(): void {
    window.history.back();
  }

  navigateUserDetail(userDetail: User): void {
    this._router.navigate(['/users', userDetail.id]);
  }
}
