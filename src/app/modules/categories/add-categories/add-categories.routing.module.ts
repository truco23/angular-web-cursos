import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { AddCategoriesComponent } from './add-categories.component';
import { LoginGuard } from '../../shared/guards/login.guard';

const addCategoriesRoutes: Routes = [
    {
        path: '',
        component: AddCategoriesComponent,
        canActivate: [
            LoginGuard
        ]
    }
]

@NgModule({
    imports: [ RouterModule.forChild(addCategoriesRoutes) ],
    exports: [ RouterModule ]
})

export class AddCategoriesRoutingModule {}