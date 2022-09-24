import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Quote } from '@BreakingBadModels';
import { QuotesService } from '@BreakingBadServices';
import { BaseListComponent } from 'src/app/shared/components/base/base-list/base-list.component';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent extends BaseListComponent<Quote, QuotesService> implements OnInit {

  constructor(_quotesService: QuotesService,
              _activatedRoute: ActivatedRoute) {
    super(_quotesService, _activatedRoute);
  }
}
