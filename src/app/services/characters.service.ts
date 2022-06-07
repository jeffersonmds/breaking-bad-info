import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Character } from '../models/character.model';
import { BaseService } from './base/base-service';

@Injectable()
export class CharactersService extends BaseService<Character>{
  path = 'characters';

  constructor(_http: HttpClient) {
    super(_http);
   }
}
