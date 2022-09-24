import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Death } from '@BreakingBadModels';
import { DeathsService } from '@BreakingBadServices';
import { map, Observable } from 'rxjs';

@Injectable()
export class DeathsGetAllResolver implements Resolve<Death[] | undefined> {

  constructor(private _service: DeathsService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
  Death[] | Observable<Death[] | undefined> | Promise<Death[] | undefined> | undefined {
    return this._service.getAll().pipe(map(r => r));
  }
}
