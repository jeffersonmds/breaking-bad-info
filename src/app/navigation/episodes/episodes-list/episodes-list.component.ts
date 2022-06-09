import { Component, Input } from '@angular/core';
import { Season } from 'src/app/models/season.model';

@Component({
  selector: 'app-episodes-list',
  templateUrl: './episodes-list.component.html',
  styleUrls: ['./episodes-list.component.scss']
})
export class EpisodesListComponent {
  @Input() seasons!: Season[];
  @Input() series!: string;

  constructor() { }
}
