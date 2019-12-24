import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { CourseInterface } from '../../typings/courses-typing.interface';
import { CourseService } from '../../services/course.service';

@Injectable({ providedIn: 'root' })
export class CoursesResolve implements Resolve<CourseInterface[]> {

    constructor(private _courseService: CourseService) { }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any> | Promise<any> | any {
        return this._courseService.get()
    }
}
