import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { ListCategoriesComponent } from './list-categories.component';

const categoriesRoutes: Routes = [
    {
        path: '',
        component: ListCategoriesComponent
    }
]

@NgModule({
    imports: [ RouterModule.forChild(categoriesRoutes) ],
    exports: [ RouterModule ]
})

export class ListCategoriesRoutingModule {}