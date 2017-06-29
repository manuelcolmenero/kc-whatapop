import { Component, EventEmitter, OnInit, OnDestroy, Output } from '@angular/core';
import { Subscription } from 'rxjs/Rx';

import { Category } from '../category';
import { CategoryService } from '../category.service';
import { ProductFilter } from '../product-filter';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnDestroy, OnInit {

  @Output() onSearch: EventEmitter<ProductFilter> = new EventEmitter();

  // Red Wine Path: Suscripción al EventEmmiter para ordenación
  @Output() onSort: EventEmitter<string> = new EventEmitter();

  productFilter: ProductFilter = {};
  categories: Category[];

  private _categoriesSubscription: Subscription;

  constructor(private _categoryService: CategoryService) { }

  ngOnInit(): void {
    this._categoriesSubscription = this._categoryService
      .getCategories()
      .subscribe((data: Category[]) => this.categories = data);
  }

  ngOnDestroy(): void {
    this._categoriesSubscription.unsubscribe();
  }

  notifyHost(): void {
    this.onSearch.emit(this.productFilter);
  }

  // Red Wine Path: 
  // Cuando se pulsa en el combo se ejecuta la función que 
  // invoca el evento de ordenación
  sortProducts(event: any): void{
    this.onSort.emit(event);
  }

}
