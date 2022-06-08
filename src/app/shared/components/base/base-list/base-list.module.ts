import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { SectionTitleModule } from '../../section-title/section-title.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  exports: [
    CommonModule,
    FormsModule,
    SectionTitleModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule
  ]
})
export class BaseListModule { }
