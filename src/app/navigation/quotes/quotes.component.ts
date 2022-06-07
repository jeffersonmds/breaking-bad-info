import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { Quote } from 'src/app/models/quote.model';
import { QuotesService } from 'src/app/services/quotes.service';
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
