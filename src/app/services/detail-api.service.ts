import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DetailApiService {
  public detailItemList: any = [];
  public productList = new BehaviorSubject<any>([]);
  constructor() {}

  getProducts() {
    return this.productList.asObservable();
  }
  setProducts(product: any) {
    this.detailItemList.push(...product);
    this.productList.next(product);
  }

  showOnDetails(product: any) {
    this.detailItemList = product;
    this.productList.next(this.detailItemList);
    // console.log(this.detailItemList);
  }
}
