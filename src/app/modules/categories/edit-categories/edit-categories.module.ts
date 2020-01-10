import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { EditCategoriesComponent } from './edit-categories.component';
import { EditCategoriesRoutingModule } from './edit-categories.routing.module';
import { JumbotronModule } from '../../shared/components/jumbotron/jumbotron.module';
import { MessageModule } from '../../shared/components/message/message.module';
import { ModalConfirmModule } from '../../shared/components/modal/modal-confirm/modal-confirm.module';
import { BreadcrumbModule } from '../../shared/components/breadcrumb/breadcrumb.module';

@NgModule({
  declarations: [EditCategoriesComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    JumbotronModule,
    MessageModule,
    ModalConfirmModule,
    BreadcrumbModule,
    EditCategoriesRoutingModule
  ],
  exports: [EditCategoriesComponent]
})
export class EditCategoriesModule { }
