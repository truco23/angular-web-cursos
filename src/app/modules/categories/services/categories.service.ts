import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment'

import { CategoriesInterface } from '../typings/categories-typing.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(
    private _http: HttpClient
  ) { }

  pagination(page: number = 1, limit: number= 10): Observable<CategoriesInterface[]> {
    return this._http.get<CategoriesInterface[]>(`${ environment.baseUrl }/categories?page=${page}&limit=${limit}`)
  }
  
  get(): Observable<CategoriesInterface[]> {
    return this._http.get<CategoriesInterface[]>(`${environment.baseUrl}/categories`)
  }

  create(name): Observable<CategoriesInterface> {
    return this._http.post<CategoriesInterface>(`${environment.baseUrl}/categories/`, { name })
  }

  delete(id: string): Observable<Object> {
    return this._http.delete(`${environment.baseUrl}/categories/${id}`)
  }
}
