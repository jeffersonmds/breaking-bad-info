import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeathsService } from 'src/app/services/deaths.service';
import { SectionTitleModule } from 'src/app/shared/components/section-title/section-title.module';

import { DeathsComponent } from './deaths.component';
import { DeathCardComponent } from './death-card/death-card.component';
import { MatCardModule } from '@angular/material/card';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: DeathsComponent,
        // resolve: {
        //   DataSourceResolver: AircraftTypeGetAllResolver
        // }
      },
    ]
  }
];

@NgModule({
  declarations: [
    DeathsComponent,
    DeathCardComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SectionTitleModule,
    MatCardModule
  ],
  providers: [
    DeathsService
  ]
})
export class DeathsModule { }
