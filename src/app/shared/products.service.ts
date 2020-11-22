import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import { catchError, map } from 'rxjs/operators';

const routes = {
  url: () => `http://localhost:5000/products/`,
  urlId: (id: any) => `http://localhost:5000/products/` + id,
}


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) { }
  getProduct(): Observable<any> {
    return this.httpClient.get(routes.url()).pipe(
      map((body:any) => body),
      catchError((err) => of(err))
    )
  }

  getIdProduct(id:any): Observable<any> {
    return this.httpClient.get(routes.urlId(id)).pipe(
      map((body:any) => body),
      catchError((err) => of(err))
    )
  }
}
