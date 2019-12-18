import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotFoundComponent } from './list/not-found/not-found.component';
import { NotFoundRoutingModule } from './not-found.routing.modules';

@NgModule({
  declarations: [NotFoundComponent, NotFoundComponent],
  imports: [
    CommonModule,
    NotFoundRoutingModule
  ],
  exports: [NotFoundComponent]
})
export class NotFoundModule { }
