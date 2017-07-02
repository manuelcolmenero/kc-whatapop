import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ConfirmDialogModule, ConfirmationService } from 'primeng/primeng';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BackendUriProvider } from './app-settings';
import { CategoryService } from './category.service';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductDetailsResolveService } from './product-details-resolve.service';
import { ProductFilterComponent } from './product-filter/product-filter.component';
import { ProductResetComponent } from './product-reset/product-reset.component';
import { ProductService } from './product.service';
import { ProductsCollectionComponent } from './products-collection/products-collection.component';
import { SoldProductsResolveService } from './sold-products-resolve.service';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserService } from './user.service';

// Blue Path: Se añade imports publication-date.pipe
import { PublicationDatePipe } from './publication-date.pipe' 

// Broken White Path: Se añade imports para el boton de favoritos
import { FavoritesService } from "./favorites.service";

// Red Wine Path: Se añade imports del pipe de ordenación
import { OrderProductPipe } from './order-product.pipe';

  /*
    Brick Red Path:
    Se añaden los import para poder viajar y filtrar el listado de productos
    por vendedor
  */
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserDetailsResolveService } from './user-details-resolve.service';
import { UserProductPipe } from './user-product.pipe';

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
| Blue Path                                                        |
|~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
| No olvides declarar PublicationDatePipe en el módulo.            |
|~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailsComponent,
    ProductFilterComponent,
    ProductResetComponent,
    ProductComponent,
    ProductsCollectionComponent,
    UserProfileComponent,
    PublicationDatePipe,
    OrderProductPipe,
    UserDetailsComponent,
    UserProductPipe
  ],
  // Blue Path: Se añade en imports AppRoutingModule
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ConfirmDialogModule,
    AppRoutingModule
  ],
  providers: [
    BackendUriProvider,
    CategoryService,
    ConfirmationService,
    ProductDetailsResolveService,
    ProductService,
    SoldProductsResolveService,
    UserService,
    FavoritesService,
    UserDetailsResolveService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
