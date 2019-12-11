import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { AddCoursesComponent } from './add-courses.component';
import { LoginGuard } from '../../shared/guards/login.guard';

const addCoursesRoutes: Routes = [
    {
        path: '',
        component: AddCoursesComponent,
        canActivate: [
            LoginGuard
        ]
    }
]

@NgModule({
    imports: [ RouterModule.forChild(addCoursesRoutes) ],
    exports: [ RouterModule ]
})

export class AddCoursesRoutingModule {}