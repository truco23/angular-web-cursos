import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddCategoriesComponent } from './add-categories.component';
import { AddCategoriesRoutingModule } from './add-categories.routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { JumbotronModule } from '../../shared/components/jumbotron/jumbotron.module';
import { MessageModule } from '../../shared/components/message/message.module';
import { ModalConfirmModule } from '../../shared/components/modal/modal-confirm/modal-confirm.module';
import { BreadcrumbModule } from '../../shared/components/breadcrumb/breadcrumb.module';

@NgModule({
  declarations: [AddCategoriesComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    JumbotronModule,
    MessageModule,
    ModalConfirmModule,
    BreadcrumbModule,
    AddCategoriesRoutingModule
  ],
  exports: [AddCategoriesComponent]
})
export class AddCategoriesModule { }
