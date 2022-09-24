import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Episode } from '@BreakingBadModels';
import { EpisodeDetailsComponent } from '../episode-details/episode-details.component';

@Component({
  selector: 'app-episode-card',
  templateUrl: './episode-card.component.html',
  styleUrls: ['./episode-card.component.scss']
})
export class EpisodeCardComponent {
  @Input() episode!: Episode;

  constructor(private dialogRef : MatDialog) { }

  openDialog(){
    this.dialogRef.open(EpisodeDetailsComponent, { data : this.episode });
  }

}
