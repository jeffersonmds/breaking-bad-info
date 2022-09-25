import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Episode } from '@BreakingBadModels';
import { BaseService } from './base/base-service';

@Injectable()
export class EpisodesService extends BaseService<Episode>{
  path = 'episodes';

  constructor(_http: HttpClient) {
    super(_http);
  }
}
