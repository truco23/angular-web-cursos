import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';
import { LoginGuard } from '../shared/guards/login.guard';

const mainRoutes: Routes = [
    {
        path: '',
        component: MainComponent,
        canActivate: [
            LoginGuard
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(mainRoutes)],
    exports: [RouterModule]
})

export class MainRoutingModule {}