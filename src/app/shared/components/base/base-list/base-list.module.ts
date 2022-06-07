import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { SectionTitleModule } from '../../section-title/section-title.module';



@NgModule({
  exports: [
    CommonModule,
    SectionTitleModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class BaseListModule { }
