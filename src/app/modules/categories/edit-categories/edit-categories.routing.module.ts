import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { EditCategoriesComponent } from './edit-categories.component';

const editCategoriesRoutes: Routes = [
    {
        path: '',
        component: EditCategoriesComponent
    }
]

@NgModule({
    imports: [ RouterModule.forChild(editCategoriesRoutes) ],
    exports: [ RouterModule ]
})

export class EditCategoriesRoutingModule {}