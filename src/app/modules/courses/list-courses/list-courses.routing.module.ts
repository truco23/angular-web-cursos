import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { ListCoursesComponent } from './list-courses.component';
import { LoginGuard } from '../../shared/guards/login.guard';

const listCoursesRoutes: Routes = [
    {
        path: '',
        component: ListCoursesComponent,
        canActivate: [
            LoginGuard
        ]
    }
]

@NgModule({
    imports: [ RouterModule.forChild(listCoursesRoutes) ],
    exports: [ RouterModule ]
})

export class ListCoursesRoutingModule {}