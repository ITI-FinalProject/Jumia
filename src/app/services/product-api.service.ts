<<<<<<< HEAD

=======
// import { IProduct } from './../models/Iproduct';
>>>>>>> 012e36532c06382791687b45d11da5ef7c7c59a8
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Iproducts } from '../models/products';

@Injectable({
  providedIn: 'root',
})
export class ProductApiService {
  constructor(private http: HttpClient) {}

<<<<<<< HEAD
  getElectronicProducts(): Observable<Iproducts> {
    return this.http
      .get<Iproducts>('http://localhost:3000/electronicDevices')
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }

  getClothesProducts(): Observable<Iproducts> {
    return this.http.get<Iproducts>('http://localhost:3000/Clothes').pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  getSportsProducts(): Observable<Iproducts> {
    return this.http.get<Iproducts>('http://localhost:3000/Sports').pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  getCronaFightProducts(): Observable<Iproducts> {
    return this.http.get<Iproducts>('http://localhost:3000/CoronaFight').pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  getlightingToolsProducts(): Observable<Iproducts> {
    return this.http.get<Iproducts>('http://localhost:3000/lightingTools').pipe(
=======
  getProducts() {
    return this.http.get<any>('http://localhost:3000/Products').pipe(
>>>>>>> 012e36532c06382791687b45d11da5ef7c7c59a8
      map((res: any) => {
        return res;
      })
    );
  }
}
