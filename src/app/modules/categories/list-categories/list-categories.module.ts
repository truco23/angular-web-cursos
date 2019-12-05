import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListCategoriesComponent } from './list-categories.component';
import { ListCategoriesRoutingModule } from './list-categories.routing.module';
import { JumbotronModule } from '../../shared/jumbotron/jumbotron.module';

@NgModule({
  declarations: [ListCategoriesComponent],
  imports: [
    CommonModule,
    JumbotronModule,
    ListCategoriesRoutingModule
  ],
  exports: [
    ListCategoriesComponent
  ]
})
export class ListCategoriesModule { }
