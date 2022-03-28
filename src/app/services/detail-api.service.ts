import { Iproducts } from './../models/products';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root',
})
export class DetailApiService {
  public detailItemList: any = [];
  public productList = new BehaviorSubject<any>([]);

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.productList.asObservable();
  }
  setProducts(product: any) {
    this.detailItemList.push(...product);
    this.productList.next(product);
  }

  showOneDetails(product: any) {
    this.detailItemList = product;
    this.productList.next(this.detailItemList);
    // console.log(this.detailItemList);
  }



  returnOneProducts(id:any):Observable<Iproducts> {

    return  this.http.get<Iproducts>(environment.BASE_URL + environment.PRODUCTS+"/"+id).pipe(catchError((error)=>{
      return throwError(()=>error.message||"");
    }))
  }
}
