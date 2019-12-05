import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListCoursesComponent } from './list-courses.component';
import { ListCoursesRoutingModule } from './list-courses.routing.module';

@NgModule({
  declarations: [ListCoursesComponent],
  imports: [
    CommonModule,
    ListCoursesRoutingModule
  ],
  exports: [ListCoursesComponent]
})
export class ListCoursesModule { }
