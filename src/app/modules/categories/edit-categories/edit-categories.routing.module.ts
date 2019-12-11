import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { EditCategoriesComponent } from './edit-categories.component';
import { LoginGuard } from '../../shared/guards/login.guard';

const editCategoriesRoutes: Routes = [
    {
        path: '',
        component: EditCategoriesComponent,
        canActivate: [
            LoginGuard
        ]
    }
]

@NgModule({
    imports: [ RouterModule.forChild(editCategoriesRoutes) ],
    exports: [ RouterModule ]
})

export class EditCategoriesRoutingModule {}