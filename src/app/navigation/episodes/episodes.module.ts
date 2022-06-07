import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterModule, Routes } from '@angular/router';
import { EpisodesService } from 'src/app/services/episodes.service';
import { SectionTitleModule } from 'src/app/shared/components/section-title/section-title.module';

import { EpisodesComponent } from '../episodes/episodes.component';
import { EpisodeCardComponent } from './episode-card/episode-card.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: EpisodesComponent,
        // resolve: {
        //   DataSourceResolver: AircraftTypeGetAllResolver
        // }
      },
    ]
  }
];

@NgModule({
  declarations: [
    EpisodesComponent,
    EpisodeCardComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SectionTitleModule,
    MatCardModule
  ],
  providers: [
    EpisodesService
  ]
})
export class EpisodesModule { }
