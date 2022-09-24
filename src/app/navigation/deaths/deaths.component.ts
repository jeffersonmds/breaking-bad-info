import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Death } from '@BreakingBadModels';
import { DeathsService } from '@BreakingBadServices';
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
