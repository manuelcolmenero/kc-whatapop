/* 
  Broken White Path:
  Se crea un servicio para gestionar el alta y baja de productos favoritos.

  El servicio de favoritos se gestiona con LocalStorage.
*/

import { Injectable } from '@angular/core';

@Injectable()
export class FavoritesService {

/* Zona de métodos privados */

/* 
    Función: _getFavorites
    Parametros: void
    Retorno: Object

    Funcionalidad:
    Se devuelve el listado de favoritos almacenado en localStorage

*/
  private _getFavorites() {
    return JSON.parse(localStorage.getItem("favorites"));
  }

/* 
    Función: _addFavorites
    Parametros: listaProductos: number[], ProductoID: number
    Retorno: void

    Funcionalidad:
    Se añade el registro que se recibe al listado de favoritos almacenado 
    en localStorage

*/

  private _addFavorites(list: number[], product: number) {
    list.push(product);
    localStorage.setItem("favorites", JSON.stringify(list));
  }

/* 
    Función: _removeFavorites
    Parametros: listaProductos: number[], Posicion: number
    Retorno: void

    Funcionalidad:
    Se elimina el registro que se recibe del listado de favoritos almacenado 
    en localStorage

*/
  private _removeFavorites(list: number[], position: number) {
    list.splice(position, 1);
    localStorage.setItem("favorites", JSON.stringify(list));
  }

/* Zona de métodos publicos  */

/* 
    Función: isFavorite
    Parametros: ProductoID: Number
    Retorno: Boolean => (true / false)

    Funcionalidad:
    Se recupera el listado de favoritos almacenado en localStorage
    
    Se verifica si ya existe en el listado
      - En caso de no existir o que la lista esté vacia devuelve 'false'
      - Si existe el registro devuelve 'true'
*/

  isFavorite(productId: number): boolean {

    let favorites = this._getFavorites();

    if (favorites) {
      let position = favorites.indexOf(productId);

      if (position === -1) {
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
  }

/* 
    Función: switchFavorite
    Parametros: ProductoID: Number
    Retorno: void

    Funcionalidad:
    Se recupera el listado de favoritos almacenado en localStorage
    
    Se verifica si ya existe en el listado
      - En caso de no existir o que la lista esté vacia se da de alta
      - Si existe el registro se elimina
*/

  switchFavorite(productId: number): void {

    let favorites = this._getFavorites();

    if (favorites) {
      let position = favorites.indexOf(productId);

      if (position === -1) {
        this._addFavorites(favorites, productId);

      } else {
        this._removeFavorites(favorites, position);
      }

    } else {
      favorites = [];
      this._addFavorites(favorites, productId);
    }
  }
}
