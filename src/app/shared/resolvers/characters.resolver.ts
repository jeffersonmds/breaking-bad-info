import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Character } from '@BreakingBadModels';
import { CharactersService } from '@BreakingBadServices';
import { map, Observable } from 'rxjs';

@Injectable()
export class CharactersGetAllResolver implements Resolve<Character[] | undefined> {

  constructor(private _service: CharactersService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
  Character[] | Observable<Character[] | undefined> | Promise<Character[] | undefined> | undefined {
    return this._service.getAll().pipe(map(r => r));
  }
}
