import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { EditCategoriesComponent } from './edit-categories.component';
import { EditCategoriesRoutingModule } from './edit-categories.routing.module';
import { JumbotronModule } from '../../shared/jumbotron/jumbotron.module';

@NgModule({
  declarations: [EditCategoriesComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    JumbotronModule,
    EditCategoriesRoutingModule
  ],
  exports: [EditCategoriesComponent]
})
export class EditCategoriesModule { }
