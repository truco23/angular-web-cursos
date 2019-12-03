import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { AddCategoriesComponent } from './add-categories.component';

const addCategoriesRoutes: Routes = [
    {
        path: '',
        component: AddCategoriesComponent
    }
]

@NgModule({
    imports: [ RouterModule.forChild(addCategoriesRoutes) ],
    exports: [ RouterModule ]
})

export class AddCategoriesRoutingModule {}