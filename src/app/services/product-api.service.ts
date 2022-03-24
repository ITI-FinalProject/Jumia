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

  getElectronicProducts() {
    return this.http.get<any>('http://localhost:3000/electronicDevices').pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  getClothesProducts() {
    return this.http.get<any>('http://localhost:3000/Clothes').pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  getSportsProducts() {
    return this.http.get<any>('http://localhost:3000/Sports').pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  getCronaFightProducts() {
    return this.http.get<any>('http://localhost:3000/CoronaFight').pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  getlightingToolsProducts() {
    return this.http.get<any>('http://localhost:3000/lightingTools').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}
