import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddCategoriesComponent } from './add-categories.component';
import { AddCategoriesRoutingModule } from './add-categories.routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddCategoriesComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AddCategoriesRoutingModule
  ],
  exports: [AddCategoriesComponent]
})
export class AddCategoriesModule { }
