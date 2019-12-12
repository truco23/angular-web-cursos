import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './main.component';
import { MainRoutingModule } from './main.routing.module';
import { CardMainComponent } from './card-main/card-main.component';

@NgModule({
  declarations: [
    MainComponent,
    CardMainComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ],
  exports: [
    MainComponent,
    CardMainComponent
  ]
})
export class MainModule { }
