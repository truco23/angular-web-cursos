import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { EditCategoriesComponent } from './edit-categories.component';
import { EditCategoriesRoutingModule } from './edit-categories.routing.module';
import { JumbotronModule } from '../../shared/jumbotron/jumbotron.module';
import { MessageModule } from '../../shared/message/message.module';

@NgModule({
  declarations: [EditCategoriesComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    JumbotronModule,
    MessageModule,
    EditCategoriesRoutingModule
  ],
  exports: [EditCategoriesComponent]
})
export class EditCategoriesModule { }
