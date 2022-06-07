import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable, map } from "rxjs";
import { Quote } from "../models/quote.model";
import { QuotesService } from "../services/quotes.service";

@Injectable()
export class QuotesGetAllResolver implements Resolve<Quote[] | undefined> {

  constructor(private _service: QuotesService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
  Quote[] | Observable<Quote[] | undefined> | Promise<Quote[] | undefined> | undefined {
    return this._service.getAll().pipe(map(r => r));
  }
}
