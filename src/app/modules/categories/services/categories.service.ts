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

  get(): Observable<CategoriesInterface[]> {
    return this._http.get<CategoriesInterface[]>(`${environment.baseUrl}/categories`)
  }
}