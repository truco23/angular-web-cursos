import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

const coursesRoutes: Routes = [
    {
        path: '',
        loadChildren: () => import('../courses/list-courses/list-courses.module').then(m => m.ListCoursesModule)
    },
    {
        path: 'add',
        loadChildren: () => import('../courses/add-courses/add-courses.module').then(m => m.AddCoursesModule)
    },
    {
        path: 'edit/:id',
        loadChildren: () => import('../courses/edit-courses/edit-courses.module').then(m => m.EditCoursesModule)
    }
]

@NgModule({
    imports: [ RouterModule.forChild(coursesRoutes) ],
    exports: [ RouterModule ]
})

export class CorusesRoutingModule {}