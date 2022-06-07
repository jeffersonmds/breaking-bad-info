import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Death } from 'src/app/models/death.model';
import { DeathsService } from 'src/app/services/deaths.service';

@Component({
  selector: 'app-deaths',
  templateUrl: './deaths.component.html',
  styleUrls: ['./deaths.component.scss']
})
export class DeathsComponent implements OnInit {
  deathsDatasource!: Death[];
  unsub$ = new Subject();

  constructor(private _episodesService: DeathsService) { }

  ngOnInit(): void {
    this.getEpisodes();
  }

  getEpisodes() {
    this._episodesService.getAll()
      .pipe(takeUntil(this.unsub$))
      .subscribe(deaths => {
        this.deathsDatasource = deaths;
        console.log(this.deathsDatasource);
      });
  }
}
