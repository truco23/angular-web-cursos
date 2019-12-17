import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

const categoroiesRoutes: Routes = [
    {
        path: '',
        loadChildren: () => import('../categories/list-categories/list-categories.module').then(m => m.ListCategoriesModule)
    },
    {
        path: 'add',
        loadChildren: () => import('../categories/add-categories/add-categories.module').then(m => m.AddCategoriesModule)
    },
    {
        path: 'edit/:id',
        loadChildren: () => import('../categories/edit-categories/edit-categories.module').then(m => m.EditCategoriesModule)
    },
]

@NgModule({
    imports: [ RouterModule.forChild(categoroiesRoutes) ],
    exports: [ RouterModule ]
})

export class CategoriesRoutingModule {}