import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { Episode } from 'src/app/models/episode.model';
import { EpisodesService } from 'src/app/services/episodes.service';
import { BaseListComponent } from 'src/app/shared/components/base/base-list/base-list.component';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent extends BaseListComponent<Episode, EpisodesService> implements OnInit {

  constructor(_episodesService: EpisodesService,
              _activatedRoute: ActivatedRoute) {
    super(_episodesService, _activatedRoute);
  }
}
