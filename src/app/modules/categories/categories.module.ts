import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesPageComponent } from './pages/categories-page/categories-page.component';
import { CategoriesRoutingModule } from './categories.routing.module';

@NgModule({
  declarations: [CategoriesPageComponent],
  imports: [
    CommonModule,
    CategoriesRoutingModule
  ],
  exports: [CategoriesPageComponent]
})
export class CategoriesModule { }
