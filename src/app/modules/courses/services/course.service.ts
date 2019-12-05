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

  get(): Observable<CourseInterface[]> {
    return this._http.get<CourseInterface[]>(`${ environment.baseUrl }/courses`)
  }
}
