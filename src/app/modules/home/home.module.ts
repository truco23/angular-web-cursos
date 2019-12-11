import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { HomeComponent } from './components/home/home.component';
import { HomeRoutingModule } from './home.routing.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HomeRoutingModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
