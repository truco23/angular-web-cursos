import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { ListCoursesComponent } from './list-courses.component';
import { LoginGuard } from '../../shared/guards/login.guard';
import { CoursesResolve } from './resolve/list-courses.resolve';

const listCoursesRoutes: Routes = [
    {
        path: '',
        component: ListCoursesComponent,
        canActivate: [
            LoginGuard
        ],
        resolve: {
            courses: CoursesResolve
        }
    }
]

@NgModule({
    imports: [ RouterModule.forChild(listCoursesRoutes) ],
    exports: [ RouterModule ]
})

export class ListCoursesRoutingModule {}