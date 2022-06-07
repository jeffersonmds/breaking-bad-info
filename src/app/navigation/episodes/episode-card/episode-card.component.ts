import { Component, Input, OnInit } from '@angular/core';
import { Episode } from 'src/app/models/episode.model';

@Component({
  selector: 'app-episode-card',
  templateUrl: './episode-card.component.html',
  styleUrls: ['./episode-card.component.scss']
})
export class EpisodeCardComponent implements OnInit {
  @Input() episode!: Episode;

  constructor() { }

  ngOnInit(): void {
  }

}
