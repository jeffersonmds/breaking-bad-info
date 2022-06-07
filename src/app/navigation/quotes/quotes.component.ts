import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Quote } from 'src/app/models/quote.model';
import { QuotesService } from 'src/app/services/quotes.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent implements OnInit {
  quotesDatasource!: Quote[];
  unsub$ = new Subject();

  constructor(private _quotesService: QuotesService) { }

  ngOnInit(): void {
    this.getQuotes();
  }

  getQuotes() {
    this._quotesService.getAll()
      .pipe(takeUntil(this.unsub$))
      .subscribe(quotes => {
        this.quotesDatasource = quotes;
        console.log(this.quotesDatasource);
      });
  }
}
