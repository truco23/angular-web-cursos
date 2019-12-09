import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

import { CourseInterface } from '../typings/courses-typing.interface';
@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(
    private _http: HttpClient
  ) { }

  pagination(page: number = 1, limit: number = 10): Observable<CourseInterface[]> {
    return this._http.get<CourseInterface[]>(`${ environment.baseUrl }/courses?page=${page}&limit=${limit}`)
  }

  get(): Observable<CourseInterface[]> {
    return this._http.get<CourseInterface[]>(`${ environment.baseUrl }/courses`)
  }

  getById(id: string): Observable<CourseInterface> {
    return this._http.get<CourseInterface>(`${ environment.baseUrl }/courses/${id}`)
  }

  create(idCategory, name, description): Observable<CourseInterface> {
    return this._http.post<CourseInterface>(`${ environment.baseUrl }/courses`, {idCategory, name, description})
  }

  put(id, name, description): Observable<CourseInterface> {
    return this._http.put<CourseInterface>(`${ environment.baseUrl }/courses/${id}`, {name, description})
  }

  delete(id: string): Observable<Object> {
    return this._http.delete(`${ environment.baseUrl }/courses/${ id }`)
  }
}
