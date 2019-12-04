import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditCategoriesComponent } from './edit-categories.component';
import { EditCategoriesRoutingModule } from './edit-categories.routing.module';

@NgModule({
  declarations: [EditCategoriesComponent],
  imports: [
    CommonModule,
    EditCategoriesRoutingModule
  ],
  exports: [EditCategoriesComponent]
})
export class EditCategoriesModule { }
