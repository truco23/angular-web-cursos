import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditCoursesComponent } from './edit-courses.component';
import { EditCoursesRoutingModule } from './edit-courses.routing.module';

@NgModule({
  declarations: [EditCoursesComponent],
  imports: [
    CommonModule,
    EditCoursesRoutingModule
  ],
  exports: [EditCoursesComponent]
})
export class EditCoursesModule { }
