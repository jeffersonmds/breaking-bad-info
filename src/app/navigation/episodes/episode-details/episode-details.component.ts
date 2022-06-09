import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Episode } from 'src/app/models/episode.model';

@Component({
  selector: 'app-episode-details',
  templateUrl: './episode-details.component.html',
  styleUrls: ['./episode-details.component.scss']
})
export class EpisodeDetailsComponent {
  episode!: Episode;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.episode = data;
  }
}
