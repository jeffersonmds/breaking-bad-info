import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

import { SidenavMenuModule } from '../shared/components/sidenav-menu/sidenav-menu.module';
import { HomeModule } from './home/home.module';
import { NavigationComponent } from './navigation.component';
import { NavigationRoutingModule } from './navigation.routing';



@NgModule({
  declarations: [ NavigationComponent ],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatSelectModule,
    NavigationRoutingModule,
    SidenavMenuModule,
    HomeModule
  ],
  exports: [
    NavigationComponent
  ]
})
export class NavigationModule { }
