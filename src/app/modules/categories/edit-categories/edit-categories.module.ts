import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { EditCategoriesComponent } from './edit-categories.component';
import { EditCategoriesRoutingModule } from './edit-categories.routing.module';

@NgModule({
  declarations: [EditCategoriesComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EditCategoriesRoutingModule
  ],
  exports: [EditCategoriesComponent]
})
export class EditCategoriesModule { }
