import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { AddCoursesComponent } from './add-courses.component';

const addCoursesRoutes: Routes = [
    {
        path: '',
        component: AddCoursesComponent
    }
]

@NgModule({
    imports: [ RouterModule.forChild(addCoursesRoutes) ],
    exports: [ RouterModule ]
})

export class AddCoursesRoutingModule {}