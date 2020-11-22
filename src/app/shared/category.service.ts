import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import { Category } from '../model/category'

const routes = {
  url: () => `http://localhost:5000/categories`,
  urlId: (id: any) => 'http://localhost:5000/categories' + id,
}

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) { }
  private nameCategory (response) {
    return response.data
  }
  getCategory(): Observable<Category[]>{
    return this.httpClient.get<Category[]>(routes.url())
      .pipe(map(this.nameCategory),
      catchError((err) => of(err))
    );
  }
}
