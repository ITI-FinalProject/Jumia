// import { IProduct } from './../models/Iproduct';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductApiService {
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<any>('http://localhost:3000/Products').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}
