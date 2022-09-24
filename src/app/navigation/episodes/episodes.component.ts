import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Episode, Season } from '@BreakingBadModels';
import { EpisodesService } from '@BreakingBadServices';
import { debounceTime } from 'rxjs';
import { BaseListComponent } from 'src/app/shared/components/base/base-list/base-list.component';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent extends BaseListComponent<Episode, EpisodesService> implements OnInit {
  filter!: string;
  seasonsBreakingBad: Season[] = [];
  seasonsBetterCallSaul: Season[] = [];

  constructor(_episodesService: EpisodesService,
              _activatedRoute: ActivatedRoute) {
    super(_episodesService, _activatedRoute);
  }

  override initializeDatasource() {
    const breakingbadEpisodes = this.datasource.filter(x => { return x.series === "Breaking Bad" });
    let totalSeasons = Math.max(...breakingbadEpisodes.map(o => parseInt(o.season)));
    for (let seasonIndex = 1; seasonIndex <= totalSeasons; seasonIndex++) {
      this.seasonsBreakingBad.push(new Season(breakingbadEpisodes.filter(x => { return x.season === seasonIndex.toString() })));
    }

    const betterCallSaulEpisodes = this.datasource.filter(x => { return x.series === "Better Call Saul" });
    totalSeasons = Math.max(...betterCallSaulEpisodes.map(o => parseInt(o.season)));
    for (let seasonIndex = 1; seasonIndex <= totalSeasons; seasonIndex++) {
      this.seasonsBetterCallSaul.push(new Season(betterCallSaulEpisodes.filter(x => { return x.season === seasonIndex.toString() })));
    }

    this.debounce
      .pipe(debounceTime(300))
      .subscribe(filter => this.filter = filter);
  }
}
