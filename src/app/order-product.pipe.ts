/* 
  Red Wine Path:
  Se crea un pipe para gestionar la ordenación de productos.

  Recibe como parametros de entrada la lista de producos a filtrar y 
  la opción por la que se desea filtrar
*/

import { Pipe, PipeTransform } from '@angular/core';

import { Product } from "./product";


@Pipe({
  name: 'orderProduct'
})
export class OrderProductPipe implements PipeTransform {

  transform(products: Product[], option: string): Product[] {

    let ordered: Product[];

// Se verifica si la lista de productos viene informada.
    if (products) {

    // En función del parametro recibido se aplica un tipo de 
    // ordenación
      switch (option) {

        // Ordenación por Titulo Ascencente
        case (option = "nameA"):
          ordered = products.sort((productA: Product, productB: Product): number => {

            let result: number;

            if (productA.name > productB.name) {
              result = 1;
            } else if (productA.name < productB.name) {
              result = -1;
            } else {
              result = 0;
            }
            return result;
          });
          break;

        // Ordenación por Titulo Descendente
        case (option = "nameD"):
          ordered = products.sort((productA: Product, productB: Product): number => {

            let result: number;
            if (productA.name < productB.name) {
              result = 1;
            } else if (productA.name > productB.name) {
              result = -1;
            } else {
              result = 0;
            }
            return result;
          });
          break;

        // Ordenación por Precio Ascendente
        case (option = "priceA"):
          ordered = products.sort((productA: Product, productB: Product): number => {

            let result: number;

            if (productA.price > productB.price) {
              result = 1;
            } else if (productA.price < productB.price) {
              result = -1;
            } else {
              result = 0;
            }
            return result;
          });
          break;

        // Ordenación por Precio Descendente
        case (option = "priceD"):
          ordered = products.sort((productA: Product, productB: Product): number => {

            let result: number;
            if (productA.price < productB.price) {
              result = 1;
            } else if (productA.price > productB.price) {
              result = -1;
            } else {
              result = 0;
            }
            return result;
          });
          break;

        // Ordenación por Fecha publicación Ascendente
        case (option = "dateA"):
          ordered = products.sort((productA: Product, productB: Product): number => {

            let result: number;

            if (productA.publishedDate > productB.publishedDate) {
              result = 1;
            } else if (productA.publishedDate < productB.publishedDate) {
              result = -1;
            } else {
              result = 0;
            }
            return result;
          });
          break;

        // Ordenación por Fecha publicación Descendente
        case (option = "dateD"):
          ordered = products.sort((productA: Product, productB: Product): number => {

            let result: number;
            if (productA.publishedDate < productB.publishedDate) {
              result = 1;
            } else if (productA.publishedDate > productB.publishedDate) {
              result = -1;
            } else {
              result = 0;
            }
            return result;
          });
          break;

    /*
      En caso de no venir informado el parametro de ordenación o 
      no ser ninguno de los anteriores se devuelve la lista igual 
      que como se recibió
    */ 
        default:
          ordered = products;
          break;

      }
      // Si la colección de contactos es nula.
    } else {
      ordered = [];
    }

    return ordered;
  }

}