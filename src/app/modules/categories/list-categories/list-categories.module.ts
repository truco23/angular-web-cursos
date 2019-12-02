import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListCategoriesComponent } from './list-categories.component';
import { ListCategoriesRoutingModule } from './list-categories.routing.module';

@NgModule({
  declarations: [ListCategoriesComponent],
  imports: [
    CommonModule,
    ListCategoriesRoutingModule
  ],
  exports: [
    ListCategoriesComponent
  ]
})
export class ListCategoriesModule { }
