import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';

import { SidenavMenuComponent } from './sidenav-menu.component';



@NgModule({
  declarations: [
    SidenavMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatDividerModule,
  ],
  exports: [
    SidenavMenuComponent
  ]
})
export class SidenavMenuModule { }
