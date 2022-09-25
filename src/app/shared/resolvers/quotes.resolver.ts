import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Quote } from '@BreakingBadModels';
import { QuotesService } from '@BreakingBadServices';
import { map, Observable } from 'rxjs';

@Injectable()
export class QuotesGetAllResolver implements Resolve<Quote[] | undefined> {

  constructor(private _service: QuotesService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
  Quote[] | Observable<Quote[] | undefined> | Promise<Quote[] | undefined> | undefined {
    return this._service.getAll().pipe(map(r => r));
  }
}
