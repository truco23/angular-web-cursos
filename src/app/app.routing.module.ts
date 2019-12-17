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
        loadChildren: () => import('./modules/categories/categories.routing.module').then(m => m.CategoriesRoutingModule)
    },
    {
        path: 'main/courses',
        loadChildren: () => import('./modules/courses/courses.routing.module').then(m => m.CorusesRoutingModule)
    }
]

@NgModule({
    imports: [ RouterModule.forRoot(appRoutes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}