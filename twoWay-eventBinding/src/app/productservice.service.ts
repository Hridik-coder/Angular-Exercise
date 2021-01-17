import { identifierName } from '@angular/compiler';
import { isSyntheticPropertyOrListener } from '@angular/compiler/src/render3/util';
import { Injectable } from '@angular/core';
import { Productdata } from './productdataClass';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService extends Productdata {

  constructor() {
    super();
  }
  data : Productdata[] = [
    {
      imgAddress : './assets/images/iphone.jpg',
      productName : 'iphone',
      productCode : 1,
      branchName : 'india',
      branchCode : 10,
      shippingAddress : 'abc'
    },
    {
      imgAddress : './assets/images/samsung.jpg',
      productName : 'samsung',
      productCode : 11,
      branchName : 'korea',
      branchCode : 101,
      shippingAddress : 'abct'
    },
    {
      imgAddress : './assets/images/xiomi.jpg',
      productName : 'xiomi',
      productCode : 111,
      branchName : 'china',
      branchCode : 1011,
      shippingAddress : 'abcqq'
    }
  ]
}
