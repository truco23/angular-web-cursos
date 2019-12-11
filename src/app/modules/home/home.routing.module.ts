import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router'

import { HomeComponent } from './components/home/home.component';
import { HomeGuard } from '../shared/guards/home.guard';

const homeRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [
            HomeGuard
        ]
    }
]

@NgModule({
    imports: [ RouterModule.forChild(homeRoutes) ],
    exports: [ RouterModule ]
})

export class HomeRoutingModule {}