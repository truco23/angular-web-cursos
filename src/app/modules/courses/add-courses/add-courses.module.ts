import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AddCoursesComponent } from './add-courses.component';
import { JumbotronModule } from '../../shared/components/jumbotron/jumbotron.module';
import { MessageModule } from '../../shared/components/message/message.module';
import { AddCoursesRoutingModule } from './add-courses.routing.module';

@NgModule({
  declarations: [AddCoursesComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    JumbotronModule,
    MessageModule,
    AddCoursesRoutingModule
  ],
  exports: [AddCoursesComponent]
})
export class AddCoursesModule { }
