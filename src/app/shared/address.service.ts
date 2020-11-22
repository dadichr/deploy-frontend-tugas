import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Observable, of, throwError} from 'rxjs';
import { catchError} from 'rxjs/operators';
import {map} from 'rxjs/operators';
import {user} from '../model/user';
import {Router} from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root'
})
export class AddressesService {
endpoint: any="http://localhost:5000";
  constructor(
    private http:HttpClient,
    private router: Router,
  ) { }
  postUserAddress(data: any): Observable<any> {
    console.log('data', data)
    return this.http.post(`${this.endpoint}/addresses/`, data, httpOptions).pipe(
      map((body: any) => body),
      catchError((err) => of(err))
    );
    
  
  }
}
