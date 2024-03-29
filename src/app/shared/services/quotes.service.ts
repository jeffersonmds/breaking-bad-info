import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Quote } from '@BreakingBadModels';
import { BaseService } from './base/base-service';

@Injectable()
export class QuotesService extends BaseService<Quote>{
  path = 'quotes';

  constructor(_http: HttpClient) {
    super(_http);
  }
}
