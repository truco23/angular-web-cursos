import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListCategoriesComponent } from './list-categories.component';
import { ListCategoriesRoutingModule } from './list-categories.routing.module';
import { JumbotronModule } from '../../shared/components/jumbotron/jumbotron.module';
import { MessageModule } from '../../shared/components/message/message.module';

@NgModule({
  declarations: [ListCategoriesComponent],
  imports: [
    CommonModule,
    JumbotronModule,
    MessageModule,
    ListCategoriesRoutingModule
  ],
  exports: [
    ListCategoriesComponent
  ]
})
export class ListCategoriesModule { }
