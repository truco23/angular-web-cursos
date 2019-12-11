import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { ListCategoriesComponent } from './list-categories.component';
import { LoginGuard } from '../../shared/guards/login.guard';

const categoriesRoutes: Routes = [
    {
        path: '',
        component: ListCategoriesComponent,
        canActivate: [
            LoginGuard
        ]
    }
]

@NgModule({
    imports: [ RouterModule.forChild(categoriesRoutes) ],
    exports: [ RouterModule ]
})

export class ListCategoriesRoutingModule {}