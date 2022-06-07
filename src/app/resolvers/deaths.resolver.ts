import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable, map } from "rxjs";
import { Death } from "../models/death.model";
import { DeathsService } from "../services/deaths.service";

@Injectable()
export class DeathsGetAllResolver implements Resolve<Death[] | undefined> {

  constructor(private _service: DeathsService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
  Death[] | Observable<Death[] | undefined> | Promise<Death[] | undefined> | undefined {
    return this._service.getAll().pipe(map(r => r));
  }
}
