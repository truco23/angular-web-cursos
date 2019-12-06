import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { EditCoursesComponent } from './edit-courses.component';

const editCoursesRoutes: Routes = [
    {
        path: '',
        component: EditCoursesComponent
    }
]

@NgModule({
    imports: [ RouterModule.forChild(editCoursesRoutes) ],
    exports: [ RouterModule ]
})

export class EditCoursesRoutingModule {}