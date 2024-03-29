import { Component, Input, OnInit } from '@angular/core';
import { Quote } from '@BreakingBadModels';

@Component({
  selector: 'app-quote-card',
  templateUrl: './quote-card.component.html',
  styleUrls: ['./quote-card.component.scss']
})
export class QuoteCardComponent implements OnInit {
  @Input() quote!: Quote;

  constructor() { }

  ngOnInit(): void {
  }

}
