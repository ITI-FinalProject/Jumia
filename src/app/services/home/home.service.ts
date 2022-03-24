import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IHome } from 'src/app/models/home';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }


  retutnHome(): Observable<IHome[]> {

    return this.http.get<IHome[]>(environment.BASE_URL + environment.HOME)
      .pipe(catchError((error) => {
        return throwError(() => error.message || "");
      }))
  }
}
