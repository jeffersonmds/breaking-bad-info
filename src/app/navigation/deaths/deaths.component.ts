import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { Death } from 'src/app/models/death.model';
import { DeathsService } from 'src/app/services/deaths.service';
import { BaseListComponent } from 'src/app/shared/components/base/base-list/base-list.component';

@Component({
  selector: 'app-deaths',
  templateUrl: './deaths.component.html',
  styleUrls: ['./deaths.component.scss']
})
export class DeathsComponent extends BaseListComponent<Death, DeathsService> implements OnInit {

  constructor(_episodesService: DeathsService,
              _activatedRoute: ActivatedRoute) {
    super(_episodesService, _activatedRoute);
  }
}
