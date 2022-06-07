import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Episode } from 'src/app/models/episode.model';
import { EpisodesService } from 'src/app/services/episodes.service';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements OnInit {
  episodesDatasource!: Episode[];
  unsub$ = new Subject();

  constructor(private _episodesService: EpisodesService) { }

  ngOnInit(): void {
    this.getEpisodes();
  }

  getEpisodes() {
    this._episodesService.getAll()
      .pipe(takeUntil(this.unsub$))
      .subscribe(episodes => {
        this.episodesDatasource = episodes;
        console.log(this.episodesDatasource);
      });
  }
}
