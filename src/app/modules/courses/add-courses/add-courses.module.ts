import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddCoursesComponent } from './add-courses.component';
import { AddCoursesRoutingModule } from './add-courses.routing.module';

@NgModule({
  declarations: [AddCoursesComponent],
  imports: [
    CommonModule,
    AddCoursesRoutingModule
  ],
  exports: [AddCoursesComponent]
})
export class AddCoursesModule { }
