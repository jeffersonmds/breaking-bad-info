import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BaseListModule } from 'src/app/shared/components/base/base-list/base-list.module';

import { HomeComponent } from './home.component';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    BaseListModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
