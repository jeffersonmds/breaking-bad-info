import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavigationRoutingModule } from './navigation.routing';
import { HomeModule } from './home/home.module';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ NavigationComponent ],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
    NavigationRoutingModule,
    HomeModule
  ],
  exports: [
    NavigationComponent
  ]
})
export class NavigationModule { }
