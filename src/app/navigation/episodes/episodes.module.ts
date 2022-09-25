import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EpisodesGetAllResolver } from '@BreakingBadResolvers';
import { EpisodesService } from '@BreakingBadServices';
import { BaseListModule } from 'src/app/shared/components/base/base-list/base-list.module';
import { FilterByEpisode } from 'src/app/shared/pipes/filter-by-episode.pipe';

import { EpisodesComponent } from '../episodes/episodes.component';
import { EpisodeCardComponent } from './episode-card/episode-card.component';
import { EpisodeDetailsComponent } from './episode-details/episode-details.component';
import { EpisodesListComponent } from './episodes-list/episodes-list.component';

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
    EpisodeCardComponent,
    EpisodesListComponent,
    EpisodeDetailsComponent,
    FilterByEpisode
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
