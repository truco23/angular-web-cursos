import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { ListCoursesComponent } from './list-courses.component';

const listCoursesRoutes: Routes = [
    {
        path: '',
        component: ListCoursesComponent
    }
]

@NgModule({
    imports: [ RouterModule.forChild(listCoursesRoutes) ],
    exports: [ RouterModule ]
})

export class ListCoursesRoutingModule {}