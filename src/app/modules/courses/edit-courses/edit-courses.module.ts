import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { EditCoursesComponent } from './edit-courses.component';
import { JumbotronModule } from '../../shared/components/jumbotron/jumbotron.module';
import { MessageModule } from '../../shared/components/message/message.module';
import { EditCoursesRoutingModule } from './edit-courses.routing.module';

@NgModule({
  declarations: [EditCoursesComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    JumbotronModule,
    MessageModule,
    EditCoursesRoutingModule
  ],
  exports: [EditCoursesComponent]
})
export class EditCoursesModule { }
