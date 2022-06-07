import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { SectionTitleComponent } from './section-title.component';



@NgModule({
  declarations: [
    SectionTitleComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    SectionTitleComponent
  ]
})
export class SectionTitleModule { }
