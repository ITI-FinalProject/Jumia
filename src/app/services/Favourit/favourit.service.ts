import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, throwError, catchError, BehaviorSubject } from 'rxjs';
import { IFavouritModel } from 'src/app/models/favouritModel';

@Injectable({
  providedIn: 'root'
})
export class FavouritService {
  public favouritItemList:any=[];
  public favouritList = new BehaviorSubject<any>([]);

  constructor(private http:HttpClient) { }

  //#region  add fav
  
  getProducts(){
    return this.favouritList.asObservable();
  }

  setProductFav(product:any){
    this.favouritItemList.push(...product);
    this.favouritList.next(product);
  }

  addToFav(product:any){
    this.favouritItemList.push(product);
    this.favouritList.next(this.favouritItemList);
  }

 

  removeFavItem(product:any){
    this.favouritItemList.map((a:any,index:any)=>{
      if(product.id===a.id){
        this.favouritItemList.splice(index,1)
      }
    })
    this.favouritList.next(this.favouritItemList)
  }

  removeAllFav(){
    this.favouritItemList = [];
    this.favouritList.next(this.favouritItemList);
  }
  //#region 
  getAllFavourit(){
    return this.http.get(environment.BASE_URL+environment.FAVOURIT).pipe(
      map((result:any)=>{
        let productId;

        result.forEach( (e :any) =>productId.push(e.id));

        return productId;
      })
   )
  };

   returnAllToFavourit():Observable<IFavouritModel> {

    return  this.http.get<IFavouritModel>(environment.BASE_URL + environment.FAVOURIT)
    .pipe(catchError((error)=>{
      return throwError(()=>error.message||"");
    }))
  } 
  addToFavourit(productid:any){
      return this.http.post(environment.BASE_URL+environment.FAVOURIT,{id:productid});
  }

  
  removeFromFavourit(productid:any){
    return this.http.delete(environment.BASE_URL+environment.FAVOURIT+'/'+productid);

  }

 returnaddToFavourit(product:any):Observable<IFavouritModel> {

  return this.http.post<IFavouritModel>(environment.BASE_URL+environment.FAVOURIT,{proFav:product});

    // return  this.http.post<IFavouritModel>(environment.BASE_URL + environment.FAVOURIT,{proFav:product})
    // .pipe(catchError((error)=>{
    //   return throwError(()=>error.message||"");
    // }))
  }

  returnremoveToFavourit(id:any):Observable<IFavouritModel> {

    return  this.http.delete<IFavouritModel>(environment.BASE_URL+environment.FAVOURIT+'/'+id);
  
  }

 

}

