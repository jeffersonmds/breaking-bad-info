import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EpisodesGetAllResolver } from 'src/app/resolvers/episodes.resolver';
import { EpisodesService } from 'src/app/services/episodes.service';
import { BaseListModule } from 'src/app/shared/components/base/base-list/base-list.module';

import { EpisodesComponent } from '../episodes/episodes.component';
import { EpisodeCardComponent } from './episode-card/episode-card.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: EpisodesComponent,
        resolve: {
          DatasourceResolver: EpisodesGetAllResolver
        }
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
    BaseListModule
  ],
  providers: [
    EpisodesService,
    EpisodesGetAllResolver
  ]
})
export class EpisodesModule { }
