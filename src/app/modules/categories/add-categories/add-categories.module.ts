import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddCategoriesComponent } from './add-categories.component';
import { AddCategoriesRoutingModule } from './add-categories.routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { JumbotronModule } from '../../shared/jumbotron/jumbotron.module';
import { MessageModule } from '../../shared/message/message.module';

@NgModule({
  declarations: [AddCategoriesComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    JumbotronModule,
    MessageModule,
    AddCategoriesRoutingModule
  ],
  exports: [AddCategoriesComponent]
})
export class AddCategoriesModule { }
