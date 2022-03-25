import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Iproducts } from '../models/products';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductApiService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Iproducts[]> {
    return this.http
      .get<Iproducts[]>(environment.BASE_URL + environment.HOME)
      .pipe(
        catchError((error) => {
          return throwError(() => error.message || '');
        })
      );
  }
}
