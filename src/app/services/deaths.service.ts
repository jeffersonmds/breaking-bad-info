import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Death } from '../models/death.model';
import { BaseService } from './base/base-service';

@Injectable()
export class DeathsService extends BaseService<Death>{
  path = 'deaths';

  constructor(_http: HttpClient) {
    super(_http);
  }
}
