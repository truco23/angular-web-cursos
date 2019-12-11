import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
    {
        path: '',
        loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
    },
    {
        path: 'main',
        loadChildren: () => import('./modules/main/main.module').then(m => m.MainModule)
    },
    {
        path: 'main/categories',
        loadChildren: () => import('./modules/categories/list-categories/list-categories.module').then(m => m.ListCategoriesModule)
    },
    {
        path: 'main/categories/add',
        loadChildren: () => import('./modules/categories/add-categories/add-categories.module').then(m => m.AddCategoriesModule)
    },
    {
        path: 'main/categories/edit/:id',
        loadChildren: () => import('./modules/categories/edit-categories/edit-categories.module').then(m => m.EditCategoriesModule)
    },
    {
        path: 'main/courses',
        loadChildren: () => import('./modules/courses/list-courses/list-courses.module').then(m => m.ListCoursesModule)
    },
    {
        path: 'main/courses/add',
        loadChildren: () => import('./modules/courses/add-courses/add-courses.module').then(m => m.AddCoursesModule)
    },
    {
        path: 'main/courses/edit/:id',
        loadChildren: () => import('./modules/courses/edit-courses/edit-courses.module').then(m => m.EditCoursesModule)
    }
]

@NgModule({
    imports: [ RouterModule.forRoot(appRoutes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}