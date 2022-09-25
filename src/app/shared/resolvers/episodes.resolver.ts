import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Episode } from '@BreakingBadModels';
import { EpisodesService } from '@BreakingBadServices';
import { map, Observable } from 'rxjs';

@Injectable()
export class EpisodesGetAllResolver implements Resolve<Episode[] | undefined> {

  constructor(private _service: EpisodesService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
  Episode[] | Observable<Episode[] | undefined> | Promise<Episode[] | undefined> | undefined {
    return this._service.getAll().pipe(map(r => r));
  }
}
