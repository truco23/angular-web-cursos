import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListCoursesComponent } from './list-courses.component';
import { ListCoursesRoutingModule } from './list-courses.routing.module';
import { JumbotronModule } from '../../shared/jumbotron/jumbotron.module';
import { MessageModule } from '../../shared/message/message.module';

@NgModule({
  declarations: [ListCoursesComponent],
  imports: [
    CommonModule,
    JumbotronModule,
    MessageModule,
    ListCoursesRoutingModule
  ],
  exports: [ListCoursesComponent]
})
export class ListCoursesModule { }
