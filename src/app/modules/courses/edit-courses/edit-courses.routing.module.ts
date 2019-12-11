import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { EditCoursesComponent } from './edit-courses.component';
import { LoginGuard } from '../../shared/guards/login.guard';

const editCoursesRoutes: Routes = [
    {
        path: '',
        component: EditCoursesComponent,
        canActivate: [
            LoginGuard
        ]
    }
]

@NgModule({
    imports: [ RouterModule.forChild(editCoursesRoutes) ],
    exports: [ RouterModule ]
})

export class EditCoursesRoutingModule {}